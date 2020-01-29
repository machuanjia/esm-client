import request from '@/utils/request'
import { IArticleData } from './types'

export const defaultArticleData: any = {
  id: 0,
  status: 'draft',
  title: '',
  fullContent: '',
  abstractContent: '',
  sourceURL: '',
  imageURL: '',
  timestamp: '',
  platforms: ['a-platform'],
  disableComment: false,
  importance: 0,
  author: '',
  reviewer: '',
  type: '',
  pageviews: 0
}

export const getOrganizations = (params: any) =>
  request({
    url: '/organizations',
    method: 'get',
    params
  })
