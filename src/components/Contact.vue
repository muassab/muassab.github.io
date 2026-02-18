<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./ui/SectionTitle.vue";
import InfoCard from "./ui/InfoCard.vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const subject = encodeURIComponent(`Contato do Portfólio - ${formData.value.name}`);
  const body = encodeURIComponent(formData.value.message);
  window.location.href = `mailto:alexandremuassab@gmail.com?subject=${subject}&body=${body}`;

  isSubmitting.value = false;
  formData.value = { name: "", email: "", message: "" };
};

const contactInfo = [
  {
    icon: "lucide:mail",
    label: "Email",
    value: "alexandremuassab@gmail.com",
    href: "mailto:alexandremuassab@gmail.com",
  },
  {
    icon: "lucide:github",
    label: "GitHub",
    value: "github.com/muassab",
    href: "https://github.com/muassab",
    external: true,
  },
  {
    icon: "lucide:linkedin",
    label: "LinkedIn",
    value: "Alexandre Muassab",
    href: "https://www.linkedin.com/in/alexandre-muassab-46607b216/",
    external: true,
  },
  { icon: "lucide:map-pin", label: "Localização", value: "Salvador, Bahia - Brasil" },
];
</script>

<template>
  <section id="contact" class="py-20 px-6 bg-secondary">
    <div class="max-w-4xl mx-auto">
      <SectionTitle
        description="Tem um projeto em mente ou quer trocar uma ideia? Ficarei feliz em conversar!"
      >
        Entre em <span class="text-accent">Contato</span>
      </SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-text-primary mb-4">Informações</h3>
          <InfoCard
            v-for="(info, index) in contactInfo"
            :key="index"
            :icon="info.icon"
            :label="info.label"
            :value="info.value"
            :href="info.href"
            :external="info.external"
          />
        </div>

        <!-- Contact Form -->
        <div>
          <h3 class="text-xl font-bold text-text-primary mb-4">Envie uma Mensagem</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-text-secondary text-sm mb-2">Nome</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label for="email" class="block text-text-secondary text-sm mb-2">Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label for="message" class="block text-text-secondary text-sm mb-2">Mensagem</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-solid w-full flex items-center justify-center gap-2"
            >
              <span v-if="isSubmitting" class="i-lucide:loader-2 animate-spin"></span>
              <span v-else class="i-lucide:send"></span>
              {{ isSubmitting ? "Enviando..." : "Enviar Mensagem" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
