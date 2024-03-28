// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上传 POST /api/app/upload/upload */
export async function postAppUploadUpload(options?: { [key: string]: any }) {
  return request<Api.Response<string[]>>('/api/app/upload/upload', {
    method: 'POST',
    ...(options || {}),
  });
}
