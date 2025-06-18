import { api } from "@/lib/axios"

interface GetOrderDetailsBody {
    orderId: string
}

interface GetOrderDetailResponse {
    id: string
    createdAt: string
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
    totalInCents: number
    customer: {
        name: string
        email: string
        phone: string | null
    }
    orderItems: {
        id: string,
        priceInCents: number,
        quantity: number,
        product: {
            name: string
        }
    }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsBody) {
    const response = await api.get<GetOrderDetailResponse>(`/orders/${orderId}`)

    return response.data
}
