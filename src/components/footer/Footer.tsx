import Image from "next/image"
import React from "react"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

import FooterLink from "@/components/footer/FooterLink"
import FooterLinkIcon from "@/components/footer/FooterLinkIcon"
import FooterScrollLink from "@/components/footer/FooterScrollLink"
import { SOCIAL, URL } from "@/lib/constants"

const Footer = () => {
  return (
    <>
      <div className="relative flex w-full justify-center overflow-hidden bg-blue-dark p-20 md:py-40 lg:py-60 xl:py-100">
        <div className="absolute top-0 left-1/2 h-60 w-2/5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-80 blur-[120px] filter"></div>
        <div className="relative grid w-full max-w-screen-2xl grid-cols-1 gap-20 py-20 lg:gap-24 xl:gap-32">
          <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-[2fr,3fr] lg:gap-80 xl:gap-100">
            <div className="grid w-full grid-cols-1 gap-24">
              <div className="w-full">
                <Image alt="" height={48} src="/img/logo.svg" width={148} />
              </div>
              <div className="text-14 text-white-60">
                Carlin Solutions is established by a team of professional and dynamic traders who
                share a common passion and experience in cryptocurrency and forex trading.
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-start gap-20 sm:gap-32 lg:grid-cols-3 xl:gap-48">
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="text-18 font-semibold text-white sm:text-20">Product</div>
                <div className="grid w-full grid-cols-1 gap-20 sm:gap-24">
                  <FooterScrollLink link={URL.HOME} title={"Home"} />
                  <FooterScrollLink link={URL.FEATURES} title={"Features"} />
                  <FooterScrollLink link={URL.TESTIMONIALS} title={"Testimonials"} />
                  <FooterScrollLink link={URL.FAQ} title={"FAQ"} />
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="text-18 font-semibold text-white sm:text-20">Company</div>
                <div className="grid w-full grid-cols-1 gap-20 sm:gap-24">
                  {/* <FooterLink link={URL.ABOUT} title={"About"} /> */}
                  <FooterLink link={URL.TERMS} title={"Terms"} />
                  <FooterLink link={URL.PRIVACY} title={"Privacy Policy"} />
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-20">
                <div className="text-18 font-semibold text-white sm:text-20">Contact</div>
                <div className="grid w-full grid-cols-1 gap-20 sm:gap-24">
                  {/* <FooterLink link={URL.HOME} title={"Support"} /> */}
                  <FooterLink link={URL.FAQ} title={"FAQ"} />
                  {/* <FooterLink link={URL.HELP} title={"Get Help"} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-white-5"></div>
          <div className="flex w-full flex-wrap items-center justify-between gap-20">
            <div className="text-14 text-white-60">© 2023 Carlin Solutions, LLC.</div>
            <div className="flex items-center gap-16">
              <FooterLinkIcon icon={<FaLinkedin className="text-16" />} link={SOCIAL.LINKEDIN} />
              <FooterLinkIcon icon={<FaTwitter className="text-16" />} link={SOCIAL.TWITTER} />
              <FooterLinkIcon icon={<FaFacebook className="text-16" />} link={SOCIAL.FACEBOOK} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
