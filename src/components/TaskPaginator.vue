<template>
  <div>
    <ul class="pagination justify-content-center">
        <li class="page-item">
            <button 
            class="page-link"
            :class="{ 'disabled': currentPage === 1 }" 
            @click="goToPreviusPage"
            :disabled="currentPage === 1"
            >
                Previous
            </button>
        </li>

        <li class="page-item disabled">
            <span class="page-link">
                Page {{ modelValue }} of {{ totalPages }}
            </span>
        </li>

        <li>
            <button 
            class="page-link" 
            @click="goToNextPage"
            :class="{ 'disabled': currentPage === totalPages }" 
            :disabled="currentPage === totalPages"
            >
                Next
            </button>
        </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const currentPage = defineModel({ required: true });

const props = defineProps({
    totalItems: {
        type: Number,
        required: true
    },
    itemsPerPage: {
        type: Number,
        required: true
    },
    /*
    modelValue: {
        type: Number,
        required: true,
    }
        */
});


const emit = defineEmits(["update:modelValue"]);
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

/*
const currentPage = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value)
});
*/

function goToPreviusPage(){
    if(props.modelValue > 1){
        currentPage.value -= 1
        //emit("update:modelValue", props.modelValue - 1)
    }
}

function goToNextPage(){
    if(props.modelValue < totalPages.value){
        currentPage.value += 1
        //emit("update:modelValue", props.modelValue + 1)
    }
}



</script>
