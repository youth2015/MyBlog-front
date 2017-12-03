
// action 函数
import {createAction} from 'redux-actions';

// 登陆页
export const request_login = createAction('REQUEST_LOGIN');

export const request_success = createAction('REQUEST_SUCCESS');

export const request_err = createAction('REQUEST_ERR');

// 标签页

export const request_tags = createAction('REQUEST_TAGS');

export const save_tags = createAction('SAVE_TAGS');

export const create_tag = createAction('CREATE_TAG');

export const delete_tag = createAction('DELETE_TAG');

export const request_tags_loading = createAction('REQUEST_TAGS_LOADING');

export const create_tag_success = createAction('CREATE_TAG_SUCCESS');

export const create_tag_failed = createAction('CREATE_TAG_FAILED');

export const delete_tag_success = createAction('DELETE_TAG_SUCCESS');

export const delete_tag_failed = createAction('DELETE_TAG_FAILED');

// 文章


// 简历
export const request_resume = createAction('REQUEST_RESUME');

export const submit_resume = createAction('SUBMIT_RESUME');

export const save_resume = createAction('SAVE_RESUME');

export const request_resume_success = createAction('REQUEST_RESUME_SUCCESS');

export const request_resume_failed = createAction('REQUEST_RESUME_FAILED');

export const submit_resume_success = createAction('SUBMIT_RESUME_SUCCESS');

export const submit_resume_failed = createAction('SUBMIT_RESUME_FAILED');

