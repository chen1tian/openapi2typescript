// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/app/release */
export async function getAppRelease(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.getAppReleaseParams,
  options?: { [key: string]: any },
) {
  return request<Api.Response<relMgr.PagedResultDto<relMgr.ReleaseDto>>>('/api/app/release', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/app/release */
export async function postAppRelease(body: relMgr.ReleaseDto, options?: { [key: string]: any }) {
  return request<Api.Response<relMgr.ReleaseDto>>('/api/app/release', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/app/release/${param0} */
export async function getAppReleaseId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.getAppReleaseIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Api.Response<relMgr.ReleaseDto>>(`/api/app/release/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/app/release/${param0} */
export async function putAppReleaseId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.putAppReleaseIdParams,
  body: relMgr.ReleaseDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Api.Response<relMgr.ReleaseDto>>(`/api/app/release/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/app/release/${param0} */
export async function deleteAppReleaseId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.deleteAppReleaseIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/app/release/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
