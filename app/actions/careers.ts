"use server";

export async function submitCareerApplication(prevState: any, formData: FormData) {
  try {
    const data = {
      first_name: formData.get("first_name")?.toString() || "",
      last_name: formData.get("last_name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      portfolio_linkdin: formData.get("portfolio")?.toString() || "",
      reason_for_applying: formData.get("reason")?.toString() || "",
      cover_letter: formData.get("cover_letter")?.toString() || "",
      resume_cv: formData.get("resume")?.toString() || "",
      // phone is in the form, optionally we can pass it, but it wasn't in the example payload
      phone_number: formData.get("phone")?.toString() || "",
    };

    const endpoint = "https://script.google.com/macros/s/AKfycbzWGvFiUIRZS4OuJkyDeGEF29Yxs1NjCP9DDAUu6PgS-Lv4GnJ_WpGtJ1sswgoFyJl1UA/exec";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit application");
    }

    return {
      success: true,
      message: "Application submitted successfully!",
    };
  } catch (error) {
    console.error("Error submitting career application:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
