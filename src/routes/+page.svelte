<script>
  import { authHandler, authStore } from "../store/authStore";

  let register = true;
  let email = "";
  let password = "";
  let confirmPassword = "";

  async function handleSubmit(){
    if(!email || !password || (register && !confirmPassword)){
        return;
    }
    if(register && password === confirmPassword){
         try{
            await authHandler.signUp(email, password);
         }catch(err){
            console.log(err)
         }
    }else{
        try {
            await authHandler
        } catch (err) {
            console.log(err)
        }
    }
    if ($authStore.currentUser){
        window.location.href="/dashboard"
    }
  }
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

<div
  class="bg-background min-h-screen text-text flex justify-center items-center"
>
  <div
    class="flex flex-col justify-between border border-secondary p-3 bg-primary rounded-lg"
  >
    <h1 class="text-xl text-center font-semibold">
      {register ? "Sign Up" : "Sign In"}
    </h1>
    <form action="" class="flex flex-col justify-between gap-3">
      <div class="flex flex-col gap-2">
        <label for="">Email:</label>
        <input
          class="text-hitam p-2 rounded-md text-black"
          bind:value={email}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="">Password:</label>
        <input
          class="text-hitam p-2 rounded-md text-black"
          bind:value={password}
          type="password"
          name="password"
          id="password"
        />
      </div>
      {#if register}
        <div class="flex flex-col gap-2">
          <label for="">Confirm Password:</label>
          <input
            class="text-hitam p-2 rounded-md text-black"
            bind:value={confirmPassword}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
      {/if}
      <button on:click={handleSubmit} class="bg-background rounded-md p-3 text-lg font-medium"
        >{register? "Sign Up": "Sign In"}</button
      >
      {#if register}
        <div>
          Already have account ? <button
            on:click={() => {
              register = false;
            }} on:keydown={()=>{}}
            class="text-secondary"
          >
            Sign In
        </button>
        </div>
      {:else}
        <div>
          Doesn't have account ? <button on:click={()=>{
            register=true
          }} on:keydown={()=>{}} class="text-secondary">Sign Up</button>
        </div>
      {/if}
    </form>
  </div>
</div>
