// Set utils function parseTime to filter
export { parseTime } from '@/utils'

// Filter for article status
export const articleStatusFilter = (status: string) => {
  const statusMap: { [key: string]: string } = {
    published: 'success',
    draft: 'info',
    deleted: 'danger'
  }
  return statusMap[status]
}

// Filter to uppercase the first character
export const uppercaseFirstChar = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export const dataSourceType = (type: number) => {
  const typeMap:any = {
    0 : '自定义',
    1 : '考勤机',
    2 :'钉钉'
  }
  return typeMap[type]
}
