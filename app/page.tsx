import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tent, ShoppingBag, MapPin, Clock, Award, Users } from "lucide-react";
import ProductCard from "@/components/product-card";
import BlogCard from "@/components/blog-card";
import BannerSlider from "@/components/BannerSlide";
import { fetchProducts, fetchContent } from "@/lib/api";
import { Montserrat } from "next/font/google";

const monstserrat = Montserrat({ subsets: ["latin"] });

// ISR Configuration - Revalidate every 300 seconds (5 minutes)
export const revalidate = 300;

export default async function Home() {
	// Fetch featured products and blog posts with proper caching
	const productsData = await fetchProducts({ limit: 4 });
	const blogData = await fetchContent({ limit: 3 });

	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden">
			{/* Sliding banner */}
			<BannerSlider />

			{/* Hero Section - Fixed untuk Mobile Responsiveness */}
			<section className="relative bg-primary-dark dark:bg-gray-800 text-white py-16 md:py-32 overflow-hidden">
				<div className="container mx-auto px-4">
					{/* Mobile: Stack vertically, Desktop: Side by side */}
					<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
						{/* Text Content */}
						<div className="flex-1 text-center lg:text-left space-y-6">
							<h1
								className={`${monstserrat.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight`}>
								Peralatan Camping Berkualitas untuk Petualangan Anda
							</h1>
							<p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
								Sewa atau beli peralatan camping terbaik untuk kebutuhan outdoor
								Anda. Kami menyediakan berbagai peralatan berkualitas dengan
								harga terjangkau.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Button
									asChild
									size="lg"
									className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
									<Link href="/jual-rental/form-persewaan">Sewa Sekarang</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto">
									<Link href="/produk">Lihat Produk</Link>
								</Button>
							</div>
						</div>

						{/* Hero Image - Responsive */}
						<div className="flex-1 flex items-center justify-center w-full">
							<div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
								<img
									src="hero/hero1.png"
									alt="HeroImage"
									className="w-full h-auto object-cover rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white dark:bg-gray-500 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
							Mengapa Memilih Adzra Camp?
						</h2>
						<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Kami menyediakan peralatan camping berkualitas dengan pelayanan
							terbaik untuk kebutuhan outdoor Anda.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						<Card className="border-none shadow-lg dark:bg-gray-800">
							<CardContent className="pt-6">
								<div className="flex flex-col items-center text-center">
									<div className="p-3 bg-primary-light/10 rounded-full mb-4">
										<Award className="h-8 w-8 text-primary-dark dark:text-white" />
									</div>
									<h3 className="text-lg md:text-xl font-semibold mb-2">
										Peralatan Berkualitas
									</h3>
									<p className="text-gray-600 dark:text-gray-200 text-sm md:text-base">
										Semua peralatan kami terawat dengan baik dan berkualitas
										tinggi untuk kenyamanan Anda.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card className="border-none shadow-lg dark:bg-gray-800">
							<CardContent className="pt-6">
								<div className="flex flex-col items-center text-center">
									<div className="p-3 bg-primary-light/10 rounded-full mb-4">
										<Clock className="h-8 w-8 text-primary-dark dark:text-white" />
									</div>
									<h3 className="text-lg md:text-xl font-semibold mb-2">
										Proses Cepat
									</h3>
									<p className="text-gray-600 dark:text-gray-200 text-sm md:text-base">
										Proses pemesanan dan pengambilan yang cepat dan mudah untuk
										menghemat waktu Anda.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card className="border-none shadow-lg dark:bg-gray-800">
							<CardContent className="pt-6">
								<div className="flex flex-col items-center text-center">
									<div className="p-3 bg-primary-light/10 rounded-full mb-4">
										<MapPin className="h-8 w-8 text-primary-dark dark:text-white" />
									</div>
									<h3 className="text-lg md:text-xl font-semibold mb-2">
										Lokasi Strategis
									</h3>
									<p className="text-gray-600 dark:text-gray-200 text-sm md:text-base">
										Lokasi kami yang strategis di Mojokerto, dekat dengan
										berbagai destinasi camping populer.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 bg-gray-50 dark:bg-gray-500 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2
							className={`${monstserrat.className} text-2xl md:text-3xl font-bold mb-4`}>
							Layanan Kami
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
							Kami menyediakan dua layanan utama untuk memenuhi kebutuhan
							outdoor Anda.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
						<Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800">
							<div className="relative h-48 md:h-56">
								<Image
									src="/images/rental-service.png"
									alt="Rental Service"
									fill
									className="object-cover"
								/>
							</div>
							<CardContent className="p-4 md:p-6">
								<div className="flex flex-col">
									<div className="flex items-center mb-4">
										<Tent className="h-5 w-5 md:h-6 md:w-6 text-primary-dark mr-2" />
										<h3
											className={`${monstserrat.className} text-lg md:text-xl font-semibold`}>
											Persewaan Peralatan
										</h3>
									</div>
									<p className="text-gray-600 mb-4 dark:text-gray-300 text-sm md:text-base">
										Sewa peralatan camping berkualitas dengan harga terjangkau
										untuk kebutuhan outdoor Anda. Tersedia berbagai pilihan
										peralatan dari tenda hingga peralatan masak.
									</p>
									<Button
										asChild
										className="mt-auto bg-primary-dark hover:bg-primary-dark/90 dark:bg-green-600 w-full sm:w-auto">
										<Link
											href="/jual-rental/form-persewaan"
											className="text-white">
											Sewa Sekarang
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card className="overflow-hidden border-none shadow-lg dark:bg-gray-800">
							<div className="relative h-48 md:h-56">
								<Image
									src="/images/store-service.png"
									alt="Store Service"
									fill
									className="object-cover"
								/>
							</div>
							<CardContent className="p-4 md:p-6">
								<div className="flex flex-col">
									<div className="flex items-center mb-4">
										<ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-primary-dark mr-2" />
										<h3
											className={`${monstserrat.className} text-lg md:text-xl font-semibold`}>
											Toko Peralatan
										</h3>
									</div>
									<p className="text-gray-600 mb-4 dark:text-gray-300 text-sm md:text-base">
										Beli peralatan camping berkualitas untuk koleksi pribadi
										Anda. Kami menyediakan berbagai produk outdoor dengan
										kualitas terbaik.
									</p>
									<Button
										asChild
										className="mt-auto bg-primary-dark hover:bg-primary-dark/90 dark:bg-green-600 w-full sm:w-auto">
										<Link href="/produk" className="text-white">
											Belanja Sekarang
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Featured Products */}
			<section className="py-16 bg-white dark:bg-gray-500 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
						<h2
							className={`${monstserrat.className} text-2xl md:text-3xl font-bold`}>
							Produk Unggulan
						</h2>
						<Link
							href="/produk"
							className="text-primary-dark hover:underline font-medium text-sm md:text-base">
							Lihat Semua
						</Link>
					</div>

					{/* Responsive Grid untuk Product Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
						{productsData.products?.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 bg-primary-dark text-white dark:bg-gray-800 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2
							className={`${monstserrat.className} text-2xl md:text-3xl font-bold mb-4`}>
							Apa Kata Mereka?
						</h2>
						<p className="text-gray-300 max-w-2xl mx-auto">
							Pengalaman pelanggan kami yang telah menggunakan layanan Adzra
							Camp.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						<Card className="bg-white/10 border-none">
							<CardContent className="p-4 md:p-6">
								<div className="flex flex-col">
									<div className="flex items-center mb-4">
										<div className="mr-4">
											<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
												<Users className="h-5 w-5 md:h-6 md:w-6 text-white" />
											</div>
										</div>
										<div>
											<h4 className="font-semibold text-sm md:text-base">
												Ahmad Fauzi
											</h4>
											<p className="text-xs md:text-sm text-gray-300">
												Surabaya
											</p>
										</div>
									</div>
									<p className="text-gray-200 text-sm md:text-base">
										"Peralatan yang disewakan sangat terawat dan berkualitas.
										Proses sewa juga sangat mudah dan cepat. Sangat
										direkomendasikan!"
									</p>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-white/10 border-none">
							<CardContent className="p-4 md:p-6">
								<div className="flex flex-col">
									<div className="flex items-center mb-4">
										<div className="mr-4">
											<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
												<Users className="h-5 w-5 md:h-6 md:w-6 text-white" />
											</div>
										</div>
										<div>
											<h4 className="font-semibold text-sm md:text-base">
												Siti Aminah
											</h4>
											<p className="text-xs md:text-sm text-gray-300">
												Mojokerto
											</p>
										</div>
									</div>
									<p className="text-gray-200 text-sm md:text-base">
										"Saya sangat puas dengan pelayanan Adzra Camp. Peralatan
										yang disewakan sangat lengkap dan harganya terjangkau."
									</p>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-white/10 border-none">
							<CardContent className="p-4 md:p-6">
								<div className="flex flex-col">
									<div className="flex items-center mb-4">
										<div className="mr-4">
											<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
												<Users className="h-5 w-5 md:h-6 md:w-6 text-white" />
											</div>
										</div>
										<div>
											<h4 className="font-semibold text-sm md:text-base">
												Budi Santoso
											</h4>
											<p className="text-xs md:text-sm text-gray-300">Malang</p>
										</div>
									</div>
									<p className="text-gray-200 text-sm md:text-base">
										"Produk yang dijual sangat berkualitas. Saya sudah membeli
										beberapa item dan semuanya awet dan sesuai dengan
										deskripsi."
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Recent Blog Posts */}
			<section className="py-16 bg-white dark:bg-gray-500 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
						<h2
							className={`${monstserrat.className} text-2xl md:text-3xl font-bold`}>
							Blog Terbaru
						</h2>
						<Link
							href="/blog"
							className="text-primary-dark hover:underline font-medium text-sm md:text-base">
							Lihat Semua
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{blogData.content?.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-accent dark:bg-yellow-800 overflow-hidden">
				<div className="container mx-auto px-4 text-center">
					<h2
						className={`${monstserrat.className} text-2xl md:text-3xl font-bold text-white mb-6`}>
						Siap Untuk Petualangan Berikutnya?
					</h2>
					<p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto">
						Dapatkan peralatan camping terbaik untuk petualangan outdoor Anda
						bersama Adzra Camp.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							size="lg"
							className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto">
							<Link href="/jual-rental/form-persewaan">Sewa Peralatan</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="bg-transparent text-white border-white hover:bg-white/10 w-full sm:w-auto">
							<Link href="/produk">Belanja Produk</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
