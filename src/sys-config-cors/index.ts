/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/sys_config_cors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SysConfigCorsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Set of additional custom headers allowed on cross-origin requests. Vault automatically includes standard headers (Content-Type, X-Requested-With, X-Vault-AWS-IAM-Server-ID, X-Vault-MFA, X-Vault-No-Request-Forwarding, X-Vault-Wrap-Format, X-Vault-Wrap-TTL, X-Vault-Policy-Override, Authorization, X-Vault-Token), so only specify custom headers here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/sys_config_cors#allowed_headers SysConfigCors#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Set of origins permitted to make cross-origin requests. Use `*` as the only value to allow all origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/sys_config_cors#allowed_origins SysConfigCors#allowed_origins}
  */
  readonly allowedOrigins: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/sys_config_cors vault_sys_config_cors}
*/
export class SysConfigCors extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_sys_config_cors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SysConfigCors resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysConfigCors to import
  * @param importFromId The id of the existing SysConfigCors that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/sys_config_cors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysConfigCors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_sys_config_cors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/sys_config_cors vault_sys_config_cors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysConfigCorsConfig
  */
  public constructor(scope: Construct, id: string, config: SysConfigCorsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_sys_config_cors',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedHeaders = config.allowedHeaders;
    this._allowedOrigins = config.allowedOrigins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_headers'));
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedHeaders),
      allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedOrigins),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_headers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedHeaders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_origins: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedOrigins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
