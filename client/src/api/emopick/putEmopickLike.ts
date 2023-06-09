import { defaultAxiosInstance } from "../instance";

type putEmopickLikeParamsType = {
  emopickId: number;
  token?: string | null;
};

type emopickType = {
  status: number;
  message: string;
  data: boolean;
};

export async function putEmopickLike({
  emopickId,
  token,
}: putEmopickLikeParamsType): Promise<boolean | null> {
  try {
    const headers: any = {};
    if (token) {
      headers.Authorization = token;
    }
    const { data }: { data: emopickType } = await defaultAxiosInstance.put(
      `/emopicks/${emopickId}/like`,
      { headers }
    );
    if (data.status === 200) {
      return data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
