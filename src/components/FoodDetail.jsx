import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

const FoodDetail = (handleFoodClick, item) => {


  return (
    <Dialog.Root>
      <Dialog.Trigger
        onClick={handleFoodClick}
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background"
      >
        Open
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content className="fixed flex items-center justify-center p-10 bg-white rounded-2xl w-full max-w-md h-1/3 top-1/4 left-1/3">
          <div>
           <h1> {item.name} teste </h1>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default FoodDetail
