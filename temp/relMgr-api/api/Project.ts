// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/app/project */
export async function getAppProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.getAppProjectParams,
  options?: { [key: string]: any },
) {
  return request<Api.Response<relMgr.PagedResultDto<relMgr.ProjectDto>>>('/api/app/project', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/app/project */
export async function postAppProject(body: relMgr.ProjectDto, options?: { [key: string]: any }) {
  return request<Api.Response<relMgr.ProjectDto>>('/api/app/project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/app/project/${param0} */
export async function getAppProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.getAppProjectIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Api.Response<relMgr.ProjectDto>>(`/api/app/project/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/app/project/${param0} */
export async function putAppProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.putAppProjectIdParams,
  body: relMgr.ProjectDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Api.Response<relMgr.ProjectDto>>(`/api/app/project/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/app/project/${param0} */
export async function deleteAppProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: relMgr.deleteAppProjectIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/app/project/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
