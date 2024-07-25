import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
          <img src="/placeholder.svg" alt="Hero Image" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground px-4 md:px-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Car</h1>
            <p className="text-lg md:text-xl mb-8">Browse our extensive inventory of high-quality used cars.</p>
            <div className="w-full max-w-md">
              <form className="flex items-center bg-primary-foreground rounded-full overflow-hidden">
                <Input
                  type="search"
                  placeholder="Search by make, model, or keyword"
                  className="flex-1 px-6 py-3 text-primary"
                />
                <Button className="px-6 py-3 rounded-full">Search</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 px-4 md:px-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Verzel?</h2>
                <p className="text-muted-foreground mb-8">
                  At Kavak, we are committed to providing our customers with the best possible car-buying experience.
                  Our team of experts carefully inspects and reconditions every vehicle in our inventory, ensuring that
                  you get a high-quality, reliable car at a fair price.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <span>Rigorous 150-point inspection</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <span>Comprehensive warranty coverage</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <span>Transparent pricing and financing options</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Featured Car Models</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <img src="/placeholder.svg" alt="Car 1" width={300} height={200} className="rounded-t-lg" />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">2019 Toyota Camry</h3>
                      <p className="text-muted-foreground mb-4">$22,995</p>
                      <Button className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <img src="/placeholder.svg" alt="Car 2" width={300} height={200} className="rounded-t-lg" />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">2020 Honda Civic</h3>
                      <p className="text-muted-foreground mb-4">$19,995</p>
                      <Button className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <img src="/placeholder.svg" alt="Car 3" width={300} height={200} className="rounded-t-lg" />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">2018 Ford Mustang</h3>
                      <p className="text-muted-foreground mb-4">$27,995</p>
                      <Button className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <img src="/placeholder.svg" alt="Car 4" width={300} height={200} className="rounded-t-lg" />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">2021 Subaru Outback</h3>
                      <p className="text-muted-foreground mb-4">$29,995</p>
                      <Button className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 px-4 md:px-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold">John Doe</h3>
                      <p className="text-muted-foreground">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I had a great experience buying my car from Kavak. The\n process was smooth, and the car is in
                    excellent\n condition. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I was impressed by the transparency and attention to\n detail at Kavak. The team went above and
                    beyond to\n ensure I got the perfect car for my needs."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold">Michael Johnson</h3>
                      <p className="text-muted-foreground">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I was hesitant about buying a used car, but Kavak\n completely changed my mind. The quality of the
                    vehicles\n and the customer service are unbeatable."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <CarIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Verzel</span>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Termos de Serviço
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contato
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
