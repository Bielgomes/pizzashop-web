import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function OrderDetailsSkeleton() {
    return (
        <div className="space-y-6">
          <Table>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="w-20 h-5" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-5 w-[164px]" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-5 w-[148px]" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-5 w-[200px]" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                <Skeleton className="h-5 w-[148px]" />
              </TableCell>
            </TableRow>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 2}).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                        <Skeleton className="w-[140px] h-5" />
                    </TableCell>
                    <TableCell className="text-right">
                        <Skeleton className="w-3 h-5 ml-auto" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="w-12 h-5 ml-auto" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="w-12 h-5 ml-auto" />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do Pedido</TableCell>
                <TableCell className="font-medium text-right">
                  <Skeleton className="w-20 h-5" />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
    )
}