!function($){"use strict";function a(a,b){this.recalc_needed=!0,this.variation_attributes=a,this.variations_available=b,this.variations_current={},this.variations_selected={},this.reset_current=function(){for(var a in this.variation_attributes){this.variations_current[a]={};for(var b=0;b<this.variation_attributes[a].length;b++)this.variations_current[a.toString()][this.variation_attributes[a][b].toString()]=0}},this.update_current=function(){this.reset_current();for(var b=0;b<this.variations_available.length;b++)if(this.variations_available[b].variation_is_active){var d=this.variations_available[b].attributes;for(var a in d){var c=d[a],f=this.variations_selected[a];if(f&&f==c)this.variations_current[a][c]=1;else{var g=!0;for(var e in this.variations_selected)if(e!=a){var h=this.variations_selected[e],i=d[e];h&&i&&h!=i&&(g=!1)}if(g){if(""===c)for(var j in this.variations_current[a])this.variations_current[a][j]=1;else this.variations_current[a][c]=1}}}}this.recalc_needed=!1},this.get_current=function(){return this.recalc_needed&&this.update_current(),this.variations_current},this.reset_selected=function(){this.recalc_needed=!0,this.variations_selected={}},this.set_selected=function(a,b){this.recalc_needed=!0,this.variations_selected[a]=b},this.get_selected=function(){return this.variations_selected}}function b(h,b){var e,p,m,a=h.closest(".product").find(".woocommerce-product-gallery.images").parent(),d="",f=!1,i=!1;if(h.closest(".product_item").length&&(f=h.closest(".product_item")),f){if(null!==b){var c=f.find(".p_img-first img");c.wc_set_variation_attr("src",b.image.src),c.wc_set_variation_attr("height",b.image.src_h),c.wc_set_variation_attr("width",b.image.src_w),c.wc_set_variation_attr("srcset",b.image.srcset),c.wc_set_variation_attr("sizes",b.image.sizes),c.wc_set_variation_attr("title",b.image.title),c.wc_set_variation_attr("data-caption",b.image.caption),c.wc_set_variation_attr("alt",b.image.alt),c.wc_set_variation_attr("data-src",b.image.full_src),c.wc_set_variation_attr("data-large_image",b.image.full_src),c.wc_set_variation_attr("data-large_image_width",b.image.full_src_w),c.wc_set_variation_attr("data-large_image_height",b.image.full_src_h)}return}if(a.closest(".elementor-widget").length&&(i=!0),null!==b)d=(e=b,p=i,m="",void 0!==e&&$.isArray(e.lakit_additional_images)&&$.each(e.lakit_additional_images,function(b,a){m+='<div data-thumb="'+a.thumb[0]+'" class="woocommerce-product-gallery__image">',p||(m+='<div class="zoomouter"><div class="zoominner">'),m+='<a href="'+a.large[0]+'" data-videolink="'+a.videolink+'" data-elementor-open-lightbox="no">',m+="<img ",m+='width="'+a.single[1]+'" ',m+='height="'+a.single[2]+'" ',m+='src="'+a.single[0]+'" ',m+='class="attachment-shop_single size-shop_single" ',m+='alt="'+a.alt+'" ',m+='title="'+a.title+'" ',m+='data-caption="'+a.caption+'" ',m+='data-src="'+a.large[0]+'" ',m+='data-large_image="'+a.large[0]+'" ',m+='data-large_image_width="'+a.large[1]+'" ',m+='data-large_image_height="'+a.large[2]+'" ',m+='srcset="'+a.srcset+'" ',m+='sizes="'+a.sizes+'" ',m+="</a>",p||(m+="</div></div>"),m+="</div>"}),m);else{var n=a.data("old_gallery")||!1;n?d=n:a.data("old_gallery",a.find(".woocommerce-product-gallery__wrapper").html())}if(""!=d&&!f){if(a.data("prev_gallery")){var j=$(a.data("prev_gallery")),o=$(d),k=!0;if(j.length==o.length)for(var g=0;g<j.length;g++)$(j[g]).attr("data-thumb")!=$(o[g]).attr("data-thumb")&&(k=!1);else k=!1;if(k)return}a.data("prev_gallery",d);var l='<div class="woocommerce-product-gallery--with-images woocommerce-product-gallery la-woo-product-gallery images" data-columns="'+a.find(".woocommerce-product-gallery.images").data("columns")+'">';a.data("gallery_action")&&(l+=a.data("gallery_action")),l+='<figure class="woocommerce-product-gallery__wrapper">'+d+'</figure><div class="la_woo_loading"><div class="la-loader spinner3"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',a.removeAttr("data-element-loaded").css({"max-height":a.height(),"min-height":a.height()}).addClass("swatch-loading"),a.html(l);var q=a.find(".woocommerce-product-gallery.images");try{q.wc_product_gallery().addClass("swatch-loaded")}catch(r){}a.css({"max-height":"none","min-height":"200px"}).removeClass("swatch-loading"),$("div.product").first().get(0).scrollIntoView({inline:"nearest",block:"start",behavior:"smooth"}),"undefined"!=typeof LaStudioKits&&i&&LaStudioKits.wooGallery(a.closest(".elementor-widget"))}}function c(a,b,c){var d=new RegExp("([?&])"+b+"=.*?(&|$)","i"),e=-1!==a.indexOf("?")?"&":"?";return a.match(d)?a.replace(d,"$1"+b+"="+c+"$2"):a+e+b+"="+c}$.fn.lakit_variation_form=function(){var c=this,f=parseInt(c.data("product_id"),10),g=null,h=!1,i=null,d=!1;if(c.closest(".product_item").length&&(d=!0),c.addClass("la-init-swatches"),c.find("th.label").each(function(){$(this).find("label").append('<span class="swatch-label"></span>')}),d){var e=parseInt(LaStudioKitSettings.i18n.swatches_max_item)||0;if(e>0){var j=c.closest(".product_item").find("a.woocommerce-loop-product__link").first().attr("href")||c.attr("action");c.find(".swatch-control").each(function(){$(".swatch-wrapper",$(this)).eq(e).before('<div class="swatch-wrapper-more"><a href="'+j+'"><i class="lastudioicon-i-add"></i><span>'+LaStudioKitSettings.i18n.swatches_more_text+"</span></a></div>")})}}c.on("bind_calculator",function(){var b=c.data("product_variations");(h=!1===b)&&c.block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var d={};if(c.find(".select-option.selected").each(function(f,g){var b=$(this),c=b.closest("div.select").eq(0),d=c.closest("tr").find(".swatch-label").eq(0),e=c.find("select").first(),a=$("<div/>").html(b.data("value")).text();a=(a=a.replace(/'/g,"\\'")).replace(/"/g,'\\"'),d&&d.html(e.children("[value='"+a+"']").eq(0).text()),e.trigger("change")}),c.find(".variations select").each(function(h,f){var a=$(f),e=a.data("attribute_name")||a.attr("name");d[e]=[];var b="";if((b=a.find("option:gt(0)").get()).length)for(var c=0;c<b.length;c++){var g=b[c];d[e].push($(g).val())}}),h){i&&i.abort();var e={action:"lakit_ajax","_nonce":LaStudioKitSettings.ajaxNonce,actions:JSON.stringify({swatches_get_product_variations:{action:"swatches_get_product_variations",data:{product_id:f}}})};i=$.ajax({url:LaStudioKitSettings.ajaxUrl,type:"POST",data:e,success:function(b){g=new a(d,b.data.responses.swatches_get_product_variations.data,null,null),c.unblock()}})}else g=new a(d,b,null,null);c.trigger("woocommerce_variation_has_changed")}),c.on("change",".wc-default-select",function(c){var a=$(this),b=a.closest("tr").find(".swatch-label").eq(0);""!=a.val()?b.html(a.find("option:selected").html()):b.html("")}),c.find(".wc-default-select").trigger("change"),c.on("click",".reset_variations",function(){if(c.find(".swatch-label").html(""),c.find(".select-option").removeClass("selected"),c.find(".radio-option").prop("checked",!1),c.closest(".product_item").length){var a=c.closest(".product_item").find(".p_img-first img");a.wc_reset_variation_attr("src"),a.wc_reset_variation_attr("width"),a.wc_reset_variation_attr("height"),a.wc_reset_variation_attr("srcset"),a.wc_reset_variation_attr("sizes"),a.wc_reset_variation_attr("title"),a.wc_reset_variation_attr("data-caption"),a.wc_reset_variation_attr("alt"),a.wc_reset_variation_attr("data-src"),a.wc_reset_variation_attr("data-large_image"),a.wc_reset_variation_attr("data-large_image_width"),a.wc_reset_variation_attr("data-large_image_height")}return!1}).on("click",".select-option",function(f){f.preventDefault();var a=$(this),d=a.closest("div.select").eq(0),c=d.closest("tr").find(".swatch-label").eq(0),e=d.find("select").first();if(a.hasClass("disabled"))return!1;if(a.hasClass("selected"))a.removeClass("selected"),e.children("option:eq(0)").prop("selected","selected").change(),c&&c.html("");else{d.find(".select-option").removeClass("selected"),a.addClass("selected");var b=$("<div/>").html(a.data("value")).text();b=(b=b.replace(/'/g,"\\'")).replace(/"/g,'\\"'),e.trigger("focusin").children("[value='"+b+"']").prop("selected","selected").change(),c&&c.html(e.children("[value='"+b+"']").eq(0).text())}}).on("change",".radio-option",function(d){var b=$(this),c=b.closest("div.select").eq(0).find("select").first(),a=$("<div/>").html(b.val()).text();a=(a=a.replace(/'/g,"\\'")).replace(/"/g,'\\"'),c.trigger("focusin").children("[value='"+a+"']").prop("selected","selected").change()}).on("woocommerce_variation_has_changed",function(){if(null!==g){c.find(".variations select").each(function(){var a=$(this).data("attribute_name")||$(this).attr("name");g.set_selected(a,$(this).val())});var a=g.get_current();c.find("div.select").each(function(d,b){var c=$(b).find("select").first(),e=a[c.data("attribute_name")||c.attr("name")];$(b).find("div.select-option").each(function(b,a){e[$(a).data("value")]?$(a).removeClass("disabled"):$(a).addClass("disabled","disabled")}),$(b).find("input.radio-option").each(function(b,a){e[$(a).val()]?($(a).removeAttr("disabled"),$(a).parent().removeClass("disabled")):($(a).attr("disabled","disabled"),$(a).parent().addClass("disabled","disabled"))})}),h&&c.find(".wc-default-select").each(function(d,c){var b=$(c),e=a[b.data("attribute_name")||b.attr("name")];b.find("option:gt(0)").removeClass("attached"),b.find("option:gt(0)").removeClass("enabled"),b.find("option:gt(0)").removeAttr("disabled"),b.find("option:gt(0)").each(function(b,a){e[$(a).val()]?($(a).addClass("attached"),$(a).addClass("enabled")):$(a).addClass("disabled","disabled")}),b.find("option:gt(0):not(.enabled)").attr("disabled","disabled")})}}).on("found_variation",function(d,a){b(c,a)}).on("reset_image",function(a){b(c,null)}),c.find(".single_variation").on("show_variation",function(i,b,h){if(d){var e=c.closest(".lakit-product");""!=b.price_html&&$(".product_item--price",e).html($(b.price_html).html());var a,f=e.find(".button.la-addcart").first();f.data("tmptext")?a=f.data("tmptext"):(a=f.text(),f.data("tmptext",a)),h&&c.find(".single_add_to_cart_button").length&&(a=c.find(".single_add_to_cart_button").text()),e.find(".button.la-addcart").attr("data-hint",a),e.find(".button.la-addcart .lakit-btn--text").text(a).attr("data-hint",a)}else{var g=$('.single-price-wrapper[data-product_id="'+c.data("product_id")+'"]');""!=b.price_html&&($(".price",g).remove(),g.append(b.price_html))}})},$(function(){var a=[];$(document).on("click",".product_item .lakit-swatch-control .swatch-wrapper",function(g){g.preventDefault();var a=$(this),b=a.closest(".product_item").find(".p_img-first img").first(),e=a.closest(".product_item").find(".la-addcart"),f=a.closest(".product_item").find(".woocommerce-loop-product__link, .product_item--title a");if(!a.hasClass("selected")){if(a.addClass("selected").siblings().removeClass("selected"),b.hasClass("--has-changed")||b.attr("data-o-src",b.attr("src")).attr("data-o-sizes",b.attr("sizes")).attr("data-o-srcset",b.attr("srcset")).addClass("--has-changed"),b.attr("src",a.attr("data-thumb")?a.attr("data-thumb"):b.attr("data-o-src")).removeAttr("sizes srcset"),e.length>0){var d=e.attr("href");d=c(d,"attribute_"+a.attr("data-attribute"),a.attr("data-value")),e.attr("href",d)}if(f.length>0){var d=f.eq(0).attr("href");d=c(d,"attribute_"+a.attr("data-attribute"),a.attr("data-value")),f.attr("href",d)}}}),$(document).on("wc_variation_form","form.variations_form",function(c){var b=$(c.target);a.push(b),!b.data("lakit_has_swatches_form")&&b.find(".swatch-control").length&&(b.data("lakit_has_swatches_form",!0),b.lakit_variation_form(),b.trigger("bind_calculator"),b.on("reload_product_variations",function(){for(var b=0;b<a.length;b++)a[b].trigger("woocommerce_variation_has_changed"),a[b].trigger("bind_calculator"),a[b].trigger("woocommerce_variation_has_changed")}))}),$(window).on("elementor/frontend/init",function(){window.elementorFrontend.hooks.addAction("frontend/element_ready/lakit-wooproducts.default",function(a){var b=parseInt(LaStudioKitSettings.i18n.swatches_max_item)||0;if(b>0){var c=a.find("a.woocommerce-loop-product__link").first().attr("href");a.find(".lakit-swatch-control").each(function(){$(".swatch-wrapper",$(this)).eq(b).before('<div class="swatch-wrapper-more"><a href="'+c+'"><i class="lastudioicon-i-add"></i><span>'+LaStudioKitSettings.i18n.swatches_more_text+"</span></a></div>")})}})})})}(jQuery)