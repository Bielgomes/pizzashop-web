import { api } from "@/lib/axios"

interface DispatchOrderBody {
    orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderBody) {
    await api.patch(`/orders/${orderId}/dispatch`)
}
