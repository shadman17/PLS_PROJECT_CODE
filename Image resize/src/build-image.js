import '@babel/polyfill'
import glob from 'glob'
import mkdirp from 'mkdirp'
import path from 'path'
import sharp from 'sharp'
import { promisify } from 'util'
import { config } from './lib/config'
import cluster from 'cluster'

const fs = require('fs')

const globp = promisify(fs.readdir)
const mediaPath = path.join(process.cwd(), 'Camera')
const forks = require('os').cpus().length


/**
 * Resize and Save Image
 */
const resizeImage = async (file, outpath, extension, resizeOptions) => {
	try {
		const extname = path.extname(file)
		const filePrefix = file.substring(
			mediaPath.length + 1,
			file.length - extname.length
		)
		const fullOutputPath = `${path.join(
			process.cwd(),
			outpath,
			filePrefix
		)}.${extension}`

		const image = await sharp('./Camera/IMG_20200114_150240.jpg')
		
		const resized = image.rotate().resize(...resizeOptions)
		
		// write file
		mkdirp.sync(path.dirname(fullOutputPath))
		await resized.toFile(fullOutputPath)
		console.log(`[${process.pid}] saving file: ${fullOutputPath}`)
	} catch (err) {
		console.error(`[${process.pid}] Exception for file: ${file}`)
		console.error(err)
	}
}

const main = async () => {
	const files = await globp(mediaPath)
//for serial computation just remove this clusterFiles line
	const clusterFiles = files.filter((_, index) => index % forks === cluster.worker.id - 1)

	for (const file of clusterfiles) {
		await Promise.all([
			resizeImage(file, 'public', 'jpg', config.images.full),
		])
	}
}

if (cluster.isPrimary){
	console.log(`[${process.pid}] I am Master`)

	for (let i = 0; i < forks; i++) {
		cluster.fork();
	  }
} else {
	console.log(`[${process.pid}] I am worker ${cluster.worker.id}`)
	main()
		.then(() => process.exit(0))
		.catch((err) => {
			console.error(err)
			process.exit(1)
		})
		
}
// main()
// .then(() => process.exit(0))
// .catch((err) => {
// 	console.error(err)
// 	process.exit(1)
// })