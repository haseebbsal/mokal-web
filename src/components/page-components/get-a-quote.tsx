import LinearGradientText from "../common/linear-gradient-text";
import QuoteBaseTabs from "../common/tabs/get-quote";
import FTLForm from "../forms/ftl-form";
import LTLForm from "../forms/ltl-form";

export default function GetAQuoteForm() {
    return (
        <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-16 sm:w-[90%]  text-center gap-4`}>
            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Get Free <LinearGradientText text="Freight Quote" /></h1>
            <QuoteBaseTabs keys={[{ name: "Less than Truckload (LTL)", component: <LTLForm /> }, {name: "Full Truckload (FTL)", component: <FTLForm /> }]}/>
        </div>
    )
}