/* tslint:disable */
/* eslint-disable */
/**
 * EPYC API
 * epyc API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    FramePlayData,
    FramePlayDataFromJSON,
    FramePlayDataToJSON,
    FramePlayTitleRequest,
    FramePlayTitleRequestFromJSON,
    FramePlayTitleRequestToJSON,
    Game,
    GameFromJSON,
    GameToJSON,
} from '../models';

export interface GetFramePlayDataRequest {
    gameName: string;
    frameId: string;
}

export interface GetGameRequest {
    gameName: string;
}

export interface PutFrameImageRequest {
    gameName: string;
    frameId: string;
    body: Blob;
}

export interface PutFrameTitleRequest {
    gameName: string;
    frameId: string;
    framePlayTitleRequest: FramePlayTitleRequest;
}

/**
 * 
 */
export class EpycApi extends runtime.BaseAPI {

    /**
     */
    async getFramePlayDataRaw(requestParameters: GetFramePlayDataRequest): Promise<runtime.ApiResponse<FramePlayData>> {
        if (requestParameters.gameName === null || requestParameters.gameName === undefined) {
            throw new runtime.RequiredError('gameName','Required parameter requestParameters.gameName was null or undefined when calling getFramePlayData.');
        }

        if (requestParameters.frameId === null || requestParameters.frameId === undefined) {
            throw new runtime.RequiredError('frameId','Required parameter requestParameters.frameId was null or undefined when calling getFramePlayData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games/{gameName}/frame/{frameId}/playData`.replace(`{${"gameName"}}`, encodeURIComponent(String(requestParameters.gameName))).replace(`{${"frameId"}}`, encodeURIComponent(String(requestParameters.frameId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FramePlayDataFromJSON(jsonValue));
    }

    /**
     */
    async getFramePlayData(requestParameters: GetFramePlayDataRequest): Promise<FramePlayData> {
        const response = await this.getFramePlayDataRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getGameRaw(requestParameters: GetGameRequest): Promise<runtime.ApiResponse<Game>> {
        if (requestParameters.gameName === null || requestParameters.gameName === undefined) {
            throw new runtime.RequiredError('gameName','Required parameter requestParameters.gameName was null or undefined when calling getGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games/{gameName}`.replace(`{${"gameName"}}`, encodeURIComponent(String(requestParameters.gameName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GameFromJSON(jsonValue));
    }

    /**
     */
    async getGame(requestParameters: GetGameRequest): Promise<Game> {
        const response = await this.getGameRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getGamesRaw(): Promise<runtime.ApiResponse<Array<Game>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GameFromJSON));
    }

    /**
     */
    async getGames(): Promise<Array<Game>> {
        const response = await this.getGamesRaw();
        return await response.value();
    }

    /**
     */
    async putFrameImageRaw(requestParameters: PutFrameImageRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gameName === null || requestParameters.gameName === undefined) {
            throw new runtime.RequiredError('gameName','Required parameter requestParameters.gameName was null or undefined when calling putFrameImage.');
        }

        if (requestParameters.frameId === null || requestParameters.frameId === undefined) {
            throw new runtime.RequiredError('frameId','Required parameter requestParameters.frameId was null or undefined when calling putFrameImage.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling putFrameImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'image/png';

        const response = await this.request({
            path: `/games/{gameName}/frame/{frameId}/image`.replace(`{${"gameName"}}`, encodeURIComponent(String(requestParameters.gameName))).replace(`{${"frameId"}}`, encodeURIComponent(String(requestParameters.frameId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async putFrameImage(requestParameters: PutFrameImageRequest): Promise<void> {
        await this.putFrameImageRaw(requestParameters);
    }

    /**
     */
    async putFrameTitleRaw(requestParameters: PutFrameTitleRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gameName === null || requestParameters.gameName === undefined) {
            throw new runtime.RequiredError('gameName','Required parameter requestParameters.gameName was null or undefined when calling putFrameTitle.');
        }

        if (requestParameters.frameId === null || requestParameters.frameId === undefined) {
            throw new runtime.RequiredError('frameId','Required parameter requestParameters.frameId was null or undefined when calling putFrameTitle.');
        }

        if (requestParameters.framePlayTitleRequest === null || requestParameters.framePlayTitleRequest === undefined) {
            throw new runtime.RequiredError('framePlayTitleRequest','Required parameter requestParameters.framePlayTitleRequest was null or undefined when calling putFrameTitle.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/games/{gameName}/frame/{frameId}/title`.replace(`{${"gameName"}}`, encodeURIComponent(String(requestParameters.gameName))).replace(`{${"frameId"}}`, encodeURIComponent(String(requestParameters.frameId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: FramePlayTitleRequestToJSON(requestParameters.framePlayTitleRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async putFrameTitle(requestParameters: PutFrameTitleRequest): Promise<void> {
        await this.putFrameTitleRaw(requestParameters);
    }

}
