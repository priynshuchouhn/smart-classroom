import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./(platform)/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Logo/>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to Smart Classroom
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Revolutionize your teaching and learning experience with our intelligent, collaborative platform. Educate smarter, not harder.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                alt="Indian students using tablets in a modern classroom"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Smart Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Intelligent Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enhance teamwork with AI-powered collaboration tools and smart group project management.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Adaptive Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Optimize class schedules, assignments, and exams with our machine learning-driven calendar system.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Personalized Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track student progress and automatically provide tailored resources to enhance individual learning outcomes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop&q=80"
                  alt="Teacher creating a digital classroom"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">1. Create Your Classroom</h3>
                <p>Set up your virtual classroom in minutes and invite your students.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=200&h=200&fit=crop&q=80"
                  alt="Students engaged in online learning"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">2. Engage Your Students</h3>
                <p>Use our interactive tools to deliver lessons, assign work, and foster collaboration.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=200&fit=crop&q=80"
                  alt="Teacher analyzing student progress"
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-bold mb-2">3. Track Progress</h3>
                <p>Monitor student performance and adjust your teaching strategy with our analytics.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">See Smart Classroom in Action</h2>
            <div className="aspect-video mx-auto max-w-3xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Smart Classroom Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&q=80"
                      alt="Priya Sharma"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Priya Sharma</h3>
                      <p className="text-sm text-gray-500">CBSE School Teacher</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    &quot;Smart Classroom has revolutionized my teaching approach. The AI-powered insights help me understand my students&apos; needs better, especially in large classrooms common in Indian schools.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&q=80"
                      alt="Rajesh Patel"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Rajesh Patel</h3>
                      <p className="text-sm text-gray-500">IIT Professor</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    &quot;The collaborative features in Smart Classroom have made group projects more engaging and productive. It&apos;s particularly useful for coordinating research work among students across different IIT campuses.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=60&h=60&fit=crop&q=80"
                      alt="Ananya Desai"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Ananya Desai</h3>
                      <p className="text-sm text-gray-500">Online Tutor</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    &quot;As an online tutor preparing students for competitive exams like JEE and NEET, Smart Classroom&apos;s personalized learning features have been a game-changer. It helps me tailor my teaching to each student&apos;s needs.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to make your classroom smarter?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of educators and students across India already using Smart Classroom to enhance their teaching and learning experience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 Smart Classroom. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  // return (
  //   <div className="flex items-center justify-center h-screen pb-20 sm:p-20">
  //     <BackgroundBeamsWithCollision>
  //       <div>
  //         <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black font-sans tracking-tight">
  //           welcome to{" "}
  //           <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
  //             <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
  //               <span className="">Smart Classroom</span>
  //             </div>
  //             <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
  //               <span className="">Smart Classroom</span>
  //             </div>
  //           </div>
  //         </h2>
  //         <p className="text-center">We&apos;re coming soon...</p>
  //       </div>
  //       <div className="fixed bottom-5 p-2 text-center">
  //         Designed and Developed by <Link className="text-purple-800" href={'https://github.com/sureshchoudharysirvi'} target="_blank">Suresh Choudhary</Link> & <Link className="text-purple-800" href={'https://github.com/priynshuchouhn'} target="_blank">Priyanshu Chouhan</Link>
  //       </div>
  //     </BackgroundBeamsWithCollision>
  //   </div>
  // );
}
