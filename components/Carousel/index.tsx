import React, { useRef } from 'react';
import { View } from 'react-native';
import RCarousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { WIDTH } from '~/core/utils/layout';
import Image from '../Image';
import Animated, { useSharedValue } from 'react-native-reanimated';

type Props = {
  data: string[];
};

const Carousel: React.FC<Props> = ({ data }) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        animated: true,
        index,
      });
    }
  };

  return (
    <View>
      <RCarousel
        ref={carouselRef}
        width={WIDTH - 32}
        height={320}
        data={data}
        scrollAnimationDuration={1000}
        overscrollEnabled={false}
        onProgressChange={progressValue}
        renderItem={({ item: imageUri }) => (
          <View className="mx-1">
            <Image source={imageUri} />
          </View>
        )}
      />
      <Animated.View className="absolute bottom-4 w-full">
        <Pagination.Basic
          progress={progressValue}
          data={data}
          activeDotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
            backgroundColor: 'white',
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 4,
            backgroundColor: '#000',
          }}
          onPress={onPressPagination}
        />
      </Animated.View>
    </View>
  );
};

export default Carousel;
