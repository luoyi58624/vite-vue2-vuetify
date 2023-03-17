import * as axios from 'axios'
import {AxiosRequestConfig, AxiosResponse} from 'axios'

export interface DataModel<T> {
  code: number
  msg?: string
  data?: T
}

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any, R = DataModel<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>

    get<T = any, R = DataModel<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>

    delete<T = any, R = DataModel<T>, D = any>(
      url: string,
      config?: AxiosRequestConfig<D>
    ): Promise<R>

    post<T = any, R = DataModel<T>, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>

    put<T = any, R = DataModel<T>, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R>
  }
}
