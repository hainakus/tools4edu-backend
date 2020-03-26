import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS_MODEL } from '../constants';
import { Model } from "mongoose";
import { Provider } from './interfaces/provider.interface';
import { CreateProviderDto } from './dto/create-provider.dto';

@Injectable()
export class ProvidersService {
  constructor(
    @Inject(PROVIDERS_MODEL)
    private providerModel: Model<Provider>
  ) {}

  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
    const createdProvider = new this.providerModel(createProviderDto);
    return createdProvider.save();
  }

  async findAll(query = {}): Promise<Provider[]> {
    return await this.providerModel.find(query).exec();
  }

  async findOne(id: string): Promise<Provider> {
    return this.providerModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<Provider> {
    return this.providerModel.findByIdAndRemove(id)
  }

  async update(id: string, provider: Provider): Promise<Provider> {
    return this.providerModel.findByIdAndUpdate(id, provider, { new: true });
  }
}
