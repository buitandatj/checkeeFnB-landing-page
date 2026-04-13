import AnimatedContent from "@/components/ui/animation-content";
import ProcessCarousel from "@/components/ui/process-carousel";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Settings, UserCheck } from "lucide-react";
export default function Home() {
  const problemCards = [
    {
      icon: ClipboardList,
      text: "Lưu mẫu thủ công dễ sai sót, khó đối chiếu và quản lý",
    },
    {
      icon: Settings,
      text: "Thiếu đồng bộ giữa các khâu: nhà cung cấp – bếp chế biến – món ăn",
    },
    {
      icon: UserCheck,
      text: "Khó chứng minh ATTP khi đoàn kiểm tra hoặc thanh tra đến đột xuất",
    },
  ];
  const features = [
    {
      id: 1,
      color: "border-blue-600 group-hover:border-blue-500",
      glow: "group-hover:shadow-blue-400/30",
      text: "Ứng dụng tiên phong tại Việt Nam - Số hóa quy trình lưu mẫu và truy xuất nguồn gốc món ăn trong lĩnh vực F&B.",
    },
    {
      id: 2,
      color: "border-yellow-400 group-hover:border-yellow-300",
      glow: "group-hover:shadow-yellow-400/30",
      text: "Tùy chỉnh theo mô hình vận hành của từng bếp ăn, nhà hàng hoặc chuỗi hệ thống.",
    },
    {
      id: 3,
      color: "border-purple-500 group-hover:border-purple-400",
      glow: "group-hover:shadow-purple-400/30",
      text: "Dễ dàng triển khai chương trình Marketing đến khách hàng theo từng món ăn, theo từng thời điểm",
    },
    {
      id: 4,
      color: "border-green-500 group-hover:border-green-400",
      glow: "group-hover:shadow-green-400/30",
      text: "Tích hợp Blockchain – QR định danh, đảm bảo tính minh bạch và xác thực.",
    },
  ];
  return (
    <main className="flex flex-col gap-20 container">
      <section>
        <div className="relative flex items-center justify-start mx-auto  h-dvh w-full">
          <div className=" relative lg:w-[80%] flex flex-col gap-10">
            <AnimatedContent direction="horizontal">
              <div className="absolute -top-4 left-0 h-2 w-full bg-[#8FD9EC]" />
            </AnimatedContent>

            <div className=" bg-[linear-gradient(100deg,#8FD9EC_0%,#2FAFDA_45%,#1B6FB8_100%)] flex flex-col p-6 sm:p-10 lg:p-15 gap-6 lg:gap-10">
              <h1 className="text-5xl text-left!">CHECKEE F&B</h1>
              <p className="sub-title-main text-white!  text-left! max-w-full lg:max-w-[70%]">
                Giải pháp Quản lý lưu mẫu và truy xuất nguồn gốc món ăn
              </p>
              <div className=" text-[#083B4C] max-w-full lg:max-w-[70%]">
                <p className="sub-title-main text-left!">
                  Được thiết kế chuyên biệt cho khối F&B
                </p>
                <p className="sub-title-main text-left!">
                  (nhà hàng, khách sạn, trường học, bếp ăn công nghiệp)
                </p>
              </div>
            </div>

            <AnimatedContent direction="horizontal">
              <div className="absolute -bottom-4 left-0 h-2 w-full bg-[#8FD9EC]" />
            </AnimatedContent>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dung-thu">
                <button className="bg-[linear-gradient(100deg,#8FD9EC_0%,#2FAFDA_45%,#1B6FB8_100%)] hover:opacity-90 text-white! px-6 py-4 md:px-12 md:py-6 rounded-full transition-colors description text-center!">
                  Nhận tư vấn giải pháp
                </button>
              </Link>
            </div>
          </div>

          <AnimatedContent
            direction="horizontal"
            className="flex-1
      absolute top-[45%] right-0
      -translate-y-1/2
      w-200 h-200
      rounded-full overflow-hidden
      shadow-2xl z-20 hidden lg:block
      "
          >
            <Image
              width={200}
              height={200}
              src="/assets/images/goigiaiphap/f&b/bg-hero.avif"
              alt="Food"
              className="w-full h-full object-cover "
            />
          </AnimatedContent>
        </div>
      </section>

      <section>
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedContent direction="horizontal">
              <div className="relative">
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/goigiaiphap/f&b/bg-about.avif"
                  alt="Chef preparing food"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedContent>

            <div className="space-y-12">
              <AnimatedContent className="flex flex-col gap-4">
                <h2 className="title-main-blue">CHECKEE F&B LÀ GÌ?</h2>
                <div className="h-1 w-20 rounded-full bg-linear-to-r from-cyan-400 to-blue-600"></div>
                <p className="description">
                  Checkee F&B là nền tảng số hóa quy trình quản lý lưu mẫu và
                  truy xuất nguồn gốc thực phẩm, món ăn dành cho nhà hàng, khách
                  sạn, bếp ăn tập thể, trường học và chuỗi suất ăn.
                </p>
                <p className="description">
                  Checkee F&B liên kết toàn bộ chuỗi nguyên liệu – chế biến –
                  món ăn – mẫu lưu, cho phép truy vết và khoanh vùng chính xác
                  khi xảy ra sự cố an toàn thực phẩm, giúp doanh nghiệp chủ động
                  bảo vệ mình trước thanh tra và rủi ro pháp lý.
                </p>
              </AnimatedContent>

              <div className="space-y-4">
                <AnimatedContent className="flex flex-col gap-10">
                  <button className="description w-full bg-linear text-white font-semibold px-6 py-3 md:py-6 rounded-full text-left transition-all shadow-md text-sm md:text-base">
                    Thực hiện lưu mẫu thực phẩm đúng quy định pháp luật
                  </button>

                  <button className="description w-full bg-linear text-white font-semibold px-6 py-3 md:py-6 rounded-full text-left transition-all shadow-md text-sm md:text-base">
                    Số hóa toàn bộ quy trình lưu mẫu và truy vết món ăn
                  </button>

                  <button className="description w-full bg-linear text-white font-semibold px-6 py-3 md:py-6 rounded-full text-left transition-all shadow-md text-sm md:text-base">
                    Minh bạch dữ liệu – sẵn sàng thanh tra, kiểm tra
                  </button>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AnimatedContent className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 gap-4 md:gap-6">
            <h2 className="title-main">
              <span className="text-orange-500">THÁCH THỨC</span>
              <br />
              <span className="title-main-blue text-transparent">
                TRONG VẬN HÀNH F&B
              </span>
            </h2>
            <div className="h-2 w-30 rounded-full bg-linear-to-r from-cyan-300 via-sky-400 to-blue-600" />
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-start mt-4">
            <div className="space-y-6">
              <p className="description">
                Trong bối cảnh tiêu chuẩn an toàn thực phẩm ngày càng siết chặt,
                đặc biệt đối với các bếp ăn tập thể, trường học, khu công
                nghiệp, khách sạn – resort, việc quản lý lưu mẫu và truy xuất
                nguồn gốc vẫn chủ yếu được thực hiện thủ công, rời rạc. Cách làm
                này không còn đáp ứng đầy đủ yêu cầu theo các chuẩn mực quản lý
                và yêu cầu của thị trường hiện nay.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Image
                  src="/assets/images/goigiaiphap/f&b/img-1.avif"
                  className="rounded-2xl h-60 w-full object-cover"
                  alt="1"
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/images/goigiaiphap/f&b/img-2.avif"
                  className="rounded-2xl h-60 w-full object-cover"
                  alt="2"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-8">
                {problemCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-blue-100/50
hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-500/20
transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-linear-to-br from-blue-500 to-cyan-500 opacity-0
group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      />

                      <div className="relative z-10 flex items-center gap-5">
                        <div
                          className="p-3 rounded-2xl bg-blue-50 group-hover:bg-white/20
transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        >
                          <Icon className="w-6 h-6 md:w-12 md:h-12 text-blue-500 group-hover:text-white transition-colors" />
                        </div>

                        <p className="description group-hover:text-white transition-colors">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
      <section>
        <AnimatedContent className="container mx-auto flex flex-col gap-6 md:gap-15">
          <div className="flex flex-col">
            <h2 className="title-main-blue">QUY TRÌNH</h2>
            <p className="sub-title-main text-center!">
              Quản lý mẫu thực phẩm (món ăn) đã chế biến
            </p>
          </div>

          <ProcessCarousel />
        </AnimatedContent>
      </section>

      <section>
        <div className="container mx-auto text-center">
          <AnimatedContent className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/assets/images/goigiaiphap/f&b/bg-food.avif"
                alt="Món ăn gắn QR Code"
                className="w-full max-w-200 md:max-w-400 h-auto object-contain"
                width={400}
                height={400}
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <Image
                src="/assets/images/goigiaiphap/f&b/img-phone.avif"
                alt="Điện thoại hiển thị thông tin"
                className="w-full max-w-200 md:max-w-400 h-auto object-contain"
                width={400}
                height={400}
              />
            </div>
          </AnimatedContent>
          <p className="sub-title-main mt-5! md:mt-10!">
            Khách hàng có thể quét{" "}
            <strong className="text-cyan-600">QR Code</strong> trên món ăn để
            xem đầy đủ thông tin <strong>nguồn gốc</strong> và{" "}
            <strong>quy trình chế biến</strong>
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col gap-5 md:gap-10 ">
          <h2 className="title-main">
            KHÁC BIỆT CỦA
            <span className="text-orange-500">CHECKEE F&B</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-2 md:gap-y-16">
              {features.map((item) => (
                <AnimatedContent key={item.id}>
                  <div className="group relative flex gap-4 md:gap-6 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 border-l-[5px] md:border-l-[6px] border-t-[5px] md:border-t-[6px]
          ${item.color} ${item.glow} transition-all duration-300`}
                    />

                    <div className="flex gap-3 md:gap-4">
                      <div className="title-main mt-1 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
                        {item.id}
                      </div>
                      <p className="description transition-colors duration-300 group-hover:text-gray-900">
                        {item.text}
                      </p>
                    </div>

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none blur-xl bg-linear-to-r from-blue-200/30 via-transparent to-purple-200/30" />
                  </div>
                </AnimatedContent>
              ))}
            </div>

            <AnimatedContent
              className="flex justify-center"
              direction="horizontal"
            >
              <Image
                src="/assets/images/goigiaiphap/f&b/img-phone-2.avif"
                alt="Checkee F&B App"
                className="w-full max-w-200 md:max-w-400 h-auto object-contain"
                width={400}
                height={400}
              />
            </AnimatedContent>
          </div>
        </div>
      </section>
    </main>
  );
}
