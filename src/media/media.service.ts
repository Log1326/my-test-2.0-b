import { Injectable } from '@nestjs/common'
import { path } from 'app-root-path'
import { ensureDir, writeFile } from 'fs-extra'
import { IMediaResponse } from './media.interface'
import { Express } from 'express'

@Injectable()
export class MediaService {
	async saveMedia(
		mediaFile: Express.Multer.File,
		folder = 'default'
	): Promise<IMediaResponse> {
		const updateFolder = `${path}/uploads/${folder}`
		await ensureDir(updateFolder)
		await writeFile(
			`${updateFolder}/${mediaFile.originalname}`,
			mediaFile.buffer
		)
		return {
			url: `/uploads/${folder}/${mediaFile.originalname}`,
			name: mediaFile.originalname
		}
	}
}
