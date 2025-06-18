import { api } from "@/lib/axios"

interface ApproveOrderBody {
    orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderBody) {
    await api.patch(`/orders/${orderId}/approve`)
}
