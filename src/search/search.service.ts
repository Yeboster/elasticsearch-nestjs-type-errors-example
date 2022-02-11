import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';

@Injectable()
export class SearchService {
  client: Client
  constructor() {
    this.client = new Client({
      node: 'http://localhost:9092'
    })
  }

  public async search(index: string, query: QueryDslQueryContainer) {
    return this.client.search({
      index,
      query
    })
  }

}
