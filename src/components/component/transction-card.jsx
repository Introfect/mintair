import { Button } from "@/components/ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export function TransctionCard() {
  return (
    (<Collapsible className="w-full max-w-md">
      <div
        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center space-x-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white dark:bg-gray-50">
            <WalletIcon className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Groceries</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">June 15, 2023</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm font-medium text-red-500">-$45.00</p>
          <CollapsibleTrigger asChild>
            <Button size="icon" variant="ghost">
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent
        className="border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Transaction ID</p>
            <p className="text-sm font-medium">123456789</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
            <p className="text-sm font-medium">Groceries</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
            <p className="text-sm font-medium">June 15, 2023</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
            <p className="text-sm font-medium text-red-500">-$45.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">Payment Method</p>
            <p className="text-sm font-medium">Visa *1234</p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>)
  );
}

function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function WalletIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>)
  );
}
