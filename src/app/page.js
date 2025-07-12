
import Stats from "@/components/Stats";
import Text from "@/components/Text";

export default function Home() {
  return (
    <>
      <div class="w-[1440px] mt-[68.5px] px-[112px] py-[60px] flex flex-col gap-[20px] bg-gray-100">
        <div class="w-[1216px] flex flex-col gap-[20px]">
          <Text />
          <Stats />
        </div>

      </div>

    </>
  );
}
