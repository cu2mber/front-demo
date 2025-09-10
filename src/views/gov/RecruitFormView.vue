<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseFormField from '@/components/BaseFormField.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import { data } from 'autoprefixer';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const localData = [
  {
    no: 1,
    district: '부산광역시',
    name: '남구',
  },
  {
    no: 2,
    district: '경상남도',
    name: '김해시',
  },
  {
    no: 3,
    district: '서울특별시',
    name: '강남구',
  },
  {
    no: 4,
    district: '경기도',
    name: '수원시',
  },
  {
    no: 5,
    district: '전라북도',
    name: '전주시',
  },
];

const eventData = [
  {
    no: 1,
    localNo: 1,
    name: '보령 머드축제',
    address: '부산광역시 남구 해운대 해수욕장',
    startDate: '2025-07-15',
    endDate: '2025-07-21',
    type: '부산광역시 남구청',
    price: '무료',
    restriction: '제한 없음',
    description: '세계적인 머드 축제로 다양한 체험과 공연이 열립니다.',
  },
  {
    no: 2,
    localNo: 1,
    name: '해양 불꽃축제',
    address: '부산광역시 남구 광안리 해변',
    startDate: '2025-10-01',
    endDate: '2025-10-02',
    type: '부산광역시 남구청',
    price: '5,000원',
    restriction: '야간만 입장 가능',
    description: '광안대교를 배경으로 한 불꽃쇼와 해양 퍼레이드가 펼쳐집니다.',
  },
  {
    no: 3,
    localNo: 1,
    name: '남구 문화예술제',
    address: '부산광역시 남구 문화회관',
    startDate: '2025-05-10',
    endDate: '2025-05-12',
    type: '부산광역시 남구청',
    price: '무료',
    restriction: '사전 예약자 우선',
    description: '지역 예술인과 주민이 함께하는 공연과 전시가 열립니다.',
  },
  {
    no: 4,
    localNo: 1,
    name: '남구 시민 마라톤 대회',
    address: '부산광역시 남구 수영강변',
    startDate: '2025-09-20',
    endDate: '2025-09-20',
    type: '부산광역시 남구청',
    price: '10,000원',
    restriction: '만 15세 이상 참가 가능',
    description: '시민이 함께 달리는 건강과 화합의 축제입니다.',
  },
  {
    no: 5,
    localNo: 1,
    name: '남구 푸드 페스티벌',
    address: '부산광역시 남구 중앙공원',
    startDate: '2025-06-01',
    endDate: '2025-06-03',
    type: '부산광역시 남구청',
    price: '입장 무료 (체험 부스 유료)',
    restriction: '반려동물 동반 가능',
    description: '남구 지역 먹거리와 전통 음식을 맛볼 수 있는 축제입니다.',
  },
];
const route = useRoute();
const router = useRouter();

const isEditMode = computed(() => !!route.params.id);

const selectedLocal = ref('');
const selectedEvent = ref('');
const price = ref('');
const formattedPrice = ref('');
const minHeadcount = ref('');
const maxHeadcount = ref('');

const departDate = ref('');
const departHour = ref('');
const departMinute = ref('');
const returnHour = ref('');
const returnMinute = ref('');

// 출발/귀가 시간 문자열
const departTime = ref('');
const returnTime = ref('');

// price 입력시 자동 3자리 콤마 포맷
watch(price, val => {
  if (!val) {
    formattedPrice.value = '';
    return;
  }
  const num = Number(String(val).replace(/[^0-9]/g, ''));
  formattedPrice.value = num ? num.toLocaleString() : '';
  price.value = num ? String(num) : '';
});

// 시간 선택 처리
watch([departHour, departMinute], ([h, m]) => {
  departTime.value = h && m ? `${h}:${m}` : '';
});
watch([returnHour, returnMinute], ([h, m]) => {
  returnTime.value = h && m ? `${h}:${m}` : '';
});

// 지자체별 행사
const filteredEvents = computed(() =>
  // 지자체별 행사 리스트 API 호출
  selectedLocal.value ? eventData.filter(e => e.localNo === Number(selectedLocal.value)) : [],
);

// 선택된 행사 정보
const selectedEventInfo = computed(
  // 행사 API 호출
  () => eventData.find(e => e.no === Number(selectedEvent.value)) ?? null,
);

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

function goToBack() {
  router.back();
}

function submitForm() {
  const payload = {
    localNo: selectedLocal.value,
    eventNo: selectedEvent.value,
    departTime: departTime.value,
    returnTime: returnTime.value,
    price: price.value,
    minHeadcount: minHeadcount.value,
    maxHeadcount: maxHeadcount.value,
  };
  console.log('등록/수정', payload);
  // 실제 서버 연동 등 작성
}

watch(
  () => route.fullPath,
  () => {
    if (isEditMode.value) {
      // API 호출 등으로 id별 데이터 불러와야 함
      selectedLocal.value = data.localNo;
      selectedEvent.value = data.eventNo;
      departTime.value = data.departTime;
      returnTime.value = data.returnTIme;
      price.value = data.price;
      minHeadcount.value = data.minHeadcount;
      maxHeadcount.value = data.maxHeadcount;
    } else {
      selectedLocal.value = '';
      selectedEvent.value = '';
      departTime.value = '';
      returnTime.value = '';
      price.value = '';
      minHeadcount.value = '';
      maxHeadcount.value = '';
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="w-full max-w-4xl px-4 py-8">
    <BaseTitle :title="isEditMode ? '모집 수정' : '모집 등록'" />
    <BaseFormField id="eventLocal" label="행사 주체 지자체" showBorder>
      <select v-model="selectedLocal" id="eventLocal" class="w-full rounded border px-2 py-3">
        <option value="">지자체 선택</option>
        <option v-for="local in localData" :key="local.no" :value="local.no">
          {{ local.district }} {{ local.name }}
        </option>
      </select>
    </BaseFormField>
    <BaseFormField id="event" label="행사 목록" showBorder>
      <select
        v-model="selectedEvent"
        id="eventList"
        class="w-full rounded border px-2 py-3"
        :disabled="!selectedLocal"
      >
        <option value="">행사 선택</option>
        <option v-for="event in filteredEvents" :key="event.no" :value="event.no">
          {{ event.name }}
        </option>
      </select>
    </BaseFormField>
    <BaseFormField id="eventInfo" label="행사정보" showBorder>
      <ul v-if="selectedEventInfo">
        <li>기간: {{ selectedEventInfo.startDate }} ~ {{ selectedEventInfo.endDate }}</li>
        <li>주최: {{ selectedEventInfo.type }}</li>
        <li>참가비: {{ selectedEventInfo.price }}</li>
        <li>{{ selectedEventInfo.description }}</li>
      </ul>
    </BaseFormField>
    <BaseFormField id="departDate" label="출발 날짜" showBorder>
      <BaseInput id="departDate" type="date" v-model="departDate" class="flex-1" />
    </BaseFormField>
    <BaseFormField id="departTime" label="출발 시간" showBorder>
      <select v-model="departHour" class="rounded border px-2 py-3">
        <option value="">시</option>
        <option v-for="h in hours" :key="h" :value="h">{{ h }}</option>
      </select>
      :
      <select v-model="departMinute" class="rounded border px-2 py-3">
        <option value="">분</option>
        <option v-for="m in minutes" :key="m" :value="m">{{ m }}</option>
      </select>
    </BaseFormField>
    <BaseFormField id="returnTime" label="귀가 시간" showBorder>
      <select v-model="returnHour" class="rounded border px-2 py-3">
        <option value="">시</option>
        <option v-for="h in hours" :key="h" :value="h">{{ h }}</option>
      </select>
      :
      <select v-model="returnMinute" class="rounded border px-2 py-3">
        <option value="">분</option>
        <option v-for="m in minutes" :key="m" :value="m">{{ m }}</option>
      </select>
    </BaseFormField>
    <BaseFormField id="price" label="요금" showBorder>
      <div class="flex w-3/5 flex-1 items-center justify-center">
        <BaseInput id="price" type="text" v-model="formattedPrice" placeholder="0" class="mr-2" />
        <span>원</span>
      </div>
    </BaseFormField>
    <BaseFormField id="participant" label="모집 인원" showBorder>
      <div class="mb-2 flex w-3/5 flex-1 items-center justify-center">
        <span>최소 인원</span>
        <BaseInput
          id="minHeadcount"
          type="number"
          v-model="minHeadcount"
          placeholder="0"
          class="ml-4 mr-2"
        />
        <span>명</span>
      </div>
      <div class="flex w-3/5 flex-1 items-center justify-center">
        <span>최대 인원</span>
        <BaseInput
          id="maxHeadcount"
          type="number"
          v-model="maxHeadcount"
          placeholder="0"
          class="ml-4 mr-2"
        />
        <span>명</span>
      </div>
    </BaseFormField>
    <div class="mt-6 flex justify-center gap-4">
      <BaseButton @click="submitForm" variant="blue">
        {{ isEditMode ? '수정' : '등록' }}
      </BaseButton>
      <BaseButton variant="secondary" @click="goToBack()">뒤로가기</BaseButton>
    </div>
  </div>
</template>
