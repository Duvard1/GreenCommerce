const BASE_URL_REGISTER = process.env.NEXT_PUBLIC_API_REGISTER_URL || 'http://44.193.255.85:8081';
const BASE_URL_LOGIN = process.env.NEXT_PUBLIC_API_LOGIN_URL || 'http://44.193.255.85:8082';
const BASE_URL_USER = process.env.NEXT_PUBLIC_API_USER_URL || 'http://3.216.196.163:8081';
const BASE_URL_PROFILE = process.env.NEXT_PUBLIC_API_PROFILE_URL || 'http://3.216.196.163:8082';
const BASE_URL_DELETE = process.env.NEXT_PUBLIC_API_DELETE_URL || 'http://3.216.196.163:8003';
const BASE_URL_PRODUCT = process.env.NEXT_PUBLIC_API_PRODUCT_URL || 'http://52.54.233.190:3008';
const BASE_URL_GRAPHQL = process.env.NEXT_PUBLIC_API_GRAPHQL_URL || 'http://52.54.233.190:3000';

export const ENDPOINTS = {
  AUTH: {
    REGISTER: `${BASE_URL_REGISTER}/auth/register`,
    LOGIN: `${BASE_URL_LOGIN}/auth/login`,
  },
  USER: {
    INFO: `${BASE_URL_USER}/user/info`,
    UPDATE: `${BASE_URL_PROFILE}/user/update`,
    DELETE: `${BASE_URL_DELETE}/delete-user`,
  },
  PRODUCT: {
    UPLOAD_IMAGE: `${BASE_URL_PRODUCT}/product/upload`,
    CREATE_GRAPHQL: `${BASE_URL_GRAPHQL}/graphql`,
  },
};
