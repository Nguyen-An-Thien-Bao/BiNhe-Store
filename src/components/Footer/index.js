import Button from '../Button';
import CollapseButton from './CollapseButton';
import routes_Footer_Config from './routesFooterConfig';

function Footer() {
    return (
        <div className="px-6 pt-32 lg:px-12">
            <div className="px-6 lg:flex lg:px-14 lg:py-20">
                <div className="lg:basis-1/2">
                    <h2 className="mb-5 text-3xl">SUBSCRIBE TO US!</h2>
                    <p className="mb-5 text-[16px] leading-[21px] tracking-wider">
                        Sign up to receive LIBÉ’s new arrival <br />
                        updates, sales, exclusive content, events and more!
                    </p>
                </div>
                <div className="mb-8 mt-24 text-center lg:mt-0 lg:basis-1/2">
                    <input
                        type="text"
                        placeholder="Your email"
                        className="flex-shrink-1 w-4/5 border-b-[1px] border-black px-8 text-2xl leading-[45px] outline-none"
                    />
                    <Button
                        size="sm"
                        border
                        className="mx-auto mt-8 block rounded-[20px] hover:bg-black hover:text-white lg:inline"
                    >
                        submit
                    </Button>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-4">
                <CollapseButton title={'About us'} config={routes_Footer_Config.aboutUs} />
                <CollapseButton title={'Help & infomation'} config={routes_Footer_Config.helpInfo} />
                <CollapseButton title={'customer service'} config={routes_Footer_Config.cusService} />
                <CollapseButton title={'© libe'} config={routes_Footer_Config.cusService} />
            </div>
        </div>
    );
}

export default Footer;
