<template>
	<v-layout column justify-center align-center v-scroll="onScroll">
		<v-responsive height="780">
			<v-layout column justify-center align-center class="pt-5">
				<v-flex xs12 sm4 md6 class="pt-5">
					<Logo />
				</v-flex>
				<v-flex xs12 sm8 md6 class="py-2">
					<h2 class="font-weight-light">
						headless dofus touch botting client
					</h2>
				</v-flex>
				<v-flex xs12 sm8 md6 class="py-2">
					<h1 class="font-weight-bold">
						~$ for servers<span class="_">_</span>
					</h1>
				</v-flex>
				<v-flex xs12 sm8 md6 class="pt-2">
					<v-btn
						outline
						class="font-weight-light"
						v-clipboard:copy="discordLink"
						v-clipboard:success="onCopy"
						color="white"
						><span class="discord text--uppercase">{{
							btnText
						}}</span></v-btn
					>
				</v-flex>
				<v-flex
					xs12
					sm8
					md6
					:offset-xs3="!copied"
					:offset-xs4="copied"
					:class="!copied ? 'pr-1' : 'pl-3'"
				>
					<h5
						@click="developerMode"
						class="font-weight-thin grey--text"
					>
						{{ developerText }}
					</h5>
				</v-flex>
				<transition name="fade">
					<svg
						v-if="offsetTop == 0"
						class="scroll"
						viewBox="0 0 48 23"
						width="50"
						@click="$vuetify.goTo(target, options)"
					>
						<polyline points="1.8,1.6 24,20.4 46.2,1.6 "></polyline>
					</svg>
				</transition>
			</v-layout>
		</v-responsive>
		<v-divider></v-divider>
		<v-responsive height="750">
			<v-layout column justify-center align-center>
				<v-flex xs12 sm8 md6 class="py-2">
					<h2
						ref="section2"
						class="display-3 font-weight-bold text-xs-center"
					>
						<span>Say hi to <span class="difys">difys</span></span>
					</h2>
					<h3 class="display-2 py-3 text-xs-center">
						Your bots, on the cloud, 24/7
					</h3>
				</v-flex>
				<v-flex xs12 sm8 md6 class="py-2 px-5">
					<p class="text-xs-center headline font-weight-light px-5">
						The problem with current available botting solutions is
						that they rely on a graphical interface, difys tries to
						remove those boundaries, giving you powers to run your
						bots headlessly, opening the doors to a world with
						serverless botting!
					</p>
				</v-flex>
				<v-flex v-if="offsetTop > 200" xs12 sm8 md6 class="py-2">
					<Terminal />
				</v-flex>
				<v-divider width="300" class="mt-4"></v-divider>
				<v-flex xs12 sm8 md6 class="my-3">
					<h6 class="license" @click="license">LICENSE: GPLv3</h6>
				</v-flex>
			</v-layout>
			<v-layout
				row
				wrap
				justify-center
				align-center
				class="text-xs-center pt-4"
			>
				<v-flex xs1>
					<a
						class="font-weight-light text-lowercase text--white"
						href="https://www.github.com/AlaaZorkane/Difys"
						target="_blank"
						>github</a
					>
				</v-flex>
				<v-flex xs1>
					<nuxt-link
						class="font-weight-light text-lowercase text--white a"
						to="/faq"
						>faq</nuxt-link
					>
				</v-flex>
				<v-flex xs1>
					<a
						class="font-weight-light text-lowercase text--white"
						href="https://discord.gg/vgvgN2n"
						target="_blank"
						>discord</a
					>
				</v-flex>
			</v-layout>
		</v-responsive>
	</v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue"
import Terminal from "~/components/Terminal.vue"

export default {
	components: {
		Logo,
		Terminal
	},
	data() {
		return {
			developerText: "developer?",
			developer: false,
			copied: false,
			btnText: "join discord",
			discordLink: "https://discord.gg/vgvgN2n",
			offsetTop: 0
		}
	},
	methods: {
		onCopy() {
			this.btnText = "invite link copied!"
			this.copied = true
		},
		onScroll(e) {
			this.offsetTop = e.pageY
		},
		license() {
			window.open(
				"https://choosealicense.com/licenses/gpl-3.0/",
				"_blank"
			)
		},
		developerMode() {
			if (!this.developer) {
				this.developer = true
				this.btnText = "join the team"
				this.developerText = "not a dev?"
				this.copied = false
				this.discordLink = "https://discord.gg/QtRtCPs"
			} else {
				this.developer = false
				this.developerText = "developer?"
				this.btnText = "join discord"
				this.copied = false
				this.discordLink = "https://discord.gg/vgvgN2n"
			}
		}
	},
	computed: {
		target() {
			return this.$refs.section2
		},
		options() {
			return {
				duration: 850,
				offset: 4,
				easing: "easeInOutCubic"
			}
		}
	}
}
</script>

<style scoped>
.license:hover {
	text-decoration: underline;
	cursor: pointer;
}
a,
.a {
	color: white !important;
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.difys {
	font-family: "Comfortaa" !important;
	letter-spacing: 0.3em !important;
	margin-right: -0.3em;
}

h5:hover {
	text-decoration: underline;
	cursor: pointer;
}
polyline {
	fill: transparent;
	stroke: white;
	stroke-width: 1;
}
.scroll {
	padding: 20px 0 0;
	position: absolute;
	bottom: 7%;
	cursor: pointer;
	transition: all 0.1s ease-out;
}
.scroll:hover {
	bottom: 5%;
}
.discord {
	letter-spacing: 0.3em !important;
	margin-right: -0.3em;
}
._ {
	animation: 1.3s blink step-end infinite;
}
@keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: white;
	}
}
</style>
