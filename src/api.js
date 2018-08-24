import axios from 'axios'

let base = '/';

export const getNewsList = (params) => { return axios.get(`${base}` + 'news/lists/' + params).then(res => res.data) };

export const getNewsDetail = (params) => { return axios.get(`${base}` + 'news/detail/' + params).then(res => res.data) };

export const getNoticeList = (params) => { return axios.get(`${base}` + 'announce/lists/' + params).then(res => res.data) };

export const getNoticeDetail = (params) => { return axios.get(`${base}` + 'announce/detail/' + params).then(res => res.data) };