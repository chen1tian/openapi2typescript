// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/app/software */
export async function getAppSoftware(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.getAppSoftwareParams,
  options?: { [key: string]: any },
) {
  return request<Api.Response<relMgr.PagedResultDto<relMgr.SoftwareDto>>>('/api/app/software', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/app/software */
export async function postAppSoftware(body: relMgr.SoftwareDto, options?: { [key: string]: any }) {
  return request<Api.Response<relMgr.SoftwareDto>>('/api/app/software', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/app/software/${param0} */
export async function getAppSoftwareId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.getAppSoftwareIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Api.Response<relMgr.SoftwareDto>>(`/api/app/software/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/app/software/${param0} */
export async function putAppSoftwareId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.putAppSoftwareIdParams,
  body: relMgr.SoftwareDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Api.Response<relMgr.SoftwareDto>>(`/api/app/software/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/app/software/${param0} */
export async function deleteAppSoftwareId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.deleteAppSoftwareIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/app/software/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
