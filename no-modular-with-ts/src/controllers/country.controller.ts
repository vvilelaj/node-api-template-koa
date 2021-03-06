/* eslint require-atomic-updates: 0 */

import { BaseContext } from 'koa'
import CountryService from '../services/country.service'

const service = new CountryService()

export default class {
  async list(ctx: BaseContext): Promise<any> {
    ctx.body = await service.findAll()
  }

  async findByIso(ctx: BaseContext): Promise<any> {
    const iso = ctx.params.iso
    const result = await service.findByIso(iso)

    if (result) {
      ctx.body = result
    } else {
      ctx.throw(400, `Country ${iso} not found`)
    }
  }
}
