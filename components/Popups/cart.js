import { GrClose } from "react-icons/gr";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from "react";

function Cart({ open, setOpen, addToCart,removeToCart,clearCart,cart,saveCart,total}) {
  console.log(addToCart,removeToCart)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#A42838] bg-opacity-70  shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-4xl font-medium text-gray-900 royal">Shopping Cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <GrClose className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                              <li className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src="https://www.fnp.com/images/pr/l/v20221130174853/butterscotch-cake-half-kg_1.jpg"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={"/"}>cake</a>
                                      </h3>
                                      <p className="ml-4">3030</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">red</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button> 
                                    </div>
                                    
                                  </div>
                                </div>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <p className="mt-0.5 text-2xl text-white royal">Shipping will be done after confirmation of order.</p>
                      <div className="mt-6 flex items-center justify-between">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-[#29142c] px-4 py-2 text-4xl font-medium text-white shadow-sm royal"
                        >
                          Checkout
                        </a>
                        <button
                          onClick={clearCart}
                          className="flex items-center justify-center rounded-md border border-transparent bg-[#29142c] px-4 py-2 text-4xl font-medium text-white shadow-sm royal"
                        >
                          Clear Cart
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p className="text-white">
                          or
                          <button
                            type="button"
                            className="font-medium text-white hover:text-white pl-1 royal text-3xl"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true" className=""> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Cart;