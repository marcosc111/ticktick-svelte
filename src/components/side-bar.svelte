<script>
	import ProfilePicture from './profile-picture.svelte';
	import SvgIcon from './svg-icon.svelte';
</script>

<div class="flex-none max-w-[50px] w-[50px] min-h-screen">
	<div class="flex flex-col items-center min-h-screen w-[50px] pb-[28px] border-r border-info-gray border-solid bg-sidebar">
		<ProfilePicture />
		<div class="flex-auto">
			<div class="mb-[20px] w-[24px] h-[24px]">
				<SvgIcon iconId="list-sidebar" selected />
			</div>
			<div class="mb-[20px] w-[24px] h-[24px] opacity-[.35] hover:opacity-60">
				<SvgIcon iconId="calendar-sidebar" />
			</div>
			<div class="mb-[20px] w-[24px] h-[24px] opacity-[.35] hover:opacity-60">
				<SvgIcon iconId="search-sidebar" />
			</div>
		</div>
		<div class="flex-none">
			<div class="mb-[16px] w-[24px] h-[24px] opacity-[.35] hover:opacity-60">
				<SvgIcon iconId="notification-sidebar" />
			</div>
			<div class="w-[24px] h-[24px] opacity-[.35] hover:opacity-60">
				<SvgIcon iconId="question-sidebar" />
			</div>
		</div>
	</div>
</div>
