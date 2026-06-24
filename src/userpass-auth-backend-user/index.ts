/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface UserpassAuthBackendUserConfig extends cdktn.TerraformMetaArguments {
  /**
  * A map of string to string that will be set as metadata on the identity alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}
  */
  readonly aliasMetadata?: { [key: string]: string };
  /**
  * Mount path for the Userpass auth engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}
  */
  readonly namespace?: string;
  /**
  * Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}
  */
  readonly passwordHashWo?: string;
  /**
  * Version counter for the write-only `password_hash_wo` field. Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}
  */
  readonly passwordHashWoVersion?: number;
  /**
  * Password for this user. This is a write-only field and will not be read back from Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Version counter for the write-only `password_wo` field. Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}
  */
  readonly passwordWoVersion?: number;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}
  */
  readonly tokenType?: string;
  /**
  * Username for this Userpass user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user vault_userpass_auth_backend_user}
*/
export class UserpassAuthBackendUser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_userpass_auth_backend_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserpassAuthBackendUser to import
  * @param importFromId The id of the existing UserpassAuthBackendUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserpassAuthBackendUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_userpass_auth_backend_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user vault_userpass_auth_backend_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserpassAuthBackendUserConfig
  */
  public constructor(scope: Construct, id: string, config: UserpassAuthBackendUserConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_userpass_auth_backend_user',
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
    this._aliasMetadata = config.aliasMetadata;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._passwordHashWo = config.passwordHashWo;
    this._passwordHashWoVersion = config.passwordHashWoVersion;
    this._passwordWo = config.passwordWo;
    this._passwordWoVersion = config.passwordWoVersion;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_metadata - computed: false, optional: true, required: false
  private _aliasMetadata?: { [key: string]: string }; 
  public get aliasMetadata() {
    return this.getStringMapAttribute('alias_metadata');
  }
  public set aliasMetadata(value: { [key: string]: string }) {
    this._aliasMetadata = value;
  }
  public resetAliasMetadata() {
    this._aliasMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasMetadataInput() {
    return this._aliasMetadata;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // password_hash_wo - computed: false, optional: true, required: false
  private _passwordHashWo?: string; 
  public get passwordHashWo() {
    return this.getStringAttribute('password_hash_wo');
  }
  public set passwordHashWo(value: string) {
    this._passwordHashWo = value;
  }
  public resetPasswordHashWo() {
    this._passwordHashWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashWoInput() {
    return this._passwordHashWo;
  }

  // password_hash_wo_version - computed: false, optional: true, required: false
  private _passwordHashWoVersion?: number; 
  public get passwordHashWoVersion() {
    return this.getNumberAttribute('password_hash_wo_version');
  }
  public set passwordHashWoVersion(value: number) {
    this._passwordHashWoVersion = value;
  }
  public resetPasswordHashWoVersion() {
    this._passwordHashWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashWoVersionInput() {
    return this._passwordHashWoVersion;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: number; 
  public get passwordWoVersion() {
    return this.getNumberAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: number) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // token_bound_cidrs - computed: false, optional: true, required: false
  private _tokenBoundCidrs?: string[]; 
  public get tokenBoundCidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('token_bound_cidrs'));
  }
  public set tokenBoundCidrs(value: string[]) {
    this._tokenBoundCidrs = value;
  }
  public resetTokenBoundCidrs() {
    this._tokenBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBoundCidrsInput() {
    return this._tokenBoundCidrs;
  }

  // token_explicit_max_ttl - computed: false, optional: true, required: false
  private _tokenExplicitMaxTtl?: number; 
  public get tokenExplicitMaxTtl() {
    return this.getNumberAttribute('token_explicit_max_ttl');
  }
  public set tokenExplicitMaxTtl(value: number) {
    this._tokenExplicitMaxTtl = value;
  }
  public resetTokenExplicitMaxTtl() {
    this._tokenExplicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExplicitMaxTtlInput() {
    return this._tokenExplicitMaxTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // token_no_default_policy - computed: false, optional: true, required: false
  private _tokenNoDefaultPolicy?: boolean | cdktn.IResolvable; 
  public get tokenNoDefaultPolicy() {
    return this.getBooleanAttribute('token_no_default_policy');
  }
  public set tokenNoDefaultPolicy(value: boolean | cdktn.IResolvable) {
    this._tokenNoDefaultPolicy = value;
  }
  public resetTokenNoDefaultPolicy() {
    this._tokenNoDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNoDefaultPolicyInput() {
    return this._tokenNoDefaultPolicy;
  }

  // token_num_uses - computed: false, optional: true, required: false
  private _tokenNumUses?: number; 
  public get tokenNumUses() {
    return this.getNumberAttribute('token_num_uses');
  }
  public set tokenNumUses(value: number) {
    this._tokenNumUses = value;
  }
  public resetTokenNumUses() {
    this._tokenNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNumUsesInput() {
    return this._tokenNumUses;
  }

  // token_period - computed: false, optional: true, required: false
  private _tokenPeriod?: number; 
  public get tokenPeriod() {
    return this.getNumberAttribute('token_period');
  }
  public set tokenPeriod(value: number) {
    this._tokenPeriod = value;
  }
  public resetTokenPeriod() {
    this._tokenPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPeriodInput() {
    return this._tokenPeriod;
  }

  // token_policies - computed: false, optional: true, required: false
  private _tokenPolicies?: string[]; 
  public get tokenPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('token_policies'));
  }
  public set tokenPolicies(value: string[]) {
    this._tokenPolicies = value;
  }
  public resetTokenPolicies() {
    this._tokenPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoliciesInput() {
    return this._tokenPolicies;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // token_type - computed: true, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._aliasMetadata),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      password_hash_wo: cdktn.stringToTerraform(this._passwordHashWo),
      password_hash_wo_version: cdktn.numberToTerraform(this._passwordHashWoVersion),
      password_wo: cdktn.stringToTerraform(this._passwordWo),
      password_wo_version: cdktn.numberToTerraform(this._passwordWoVersion),
      token_bound_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktn.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktn.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktn.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktn.numberToTerraform(this._tokenNumUses),
      token_period: cdktn.numberToTerraform(this._tokenPeriod),
      token_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktn.numberToTerraform(this._tokenTtl),
      token_type: cdktn.stringToTerraform(this._tokenType),
      username: cdktn.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._aliasMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_hash_wo: {
        value: cdktn.stringToHclTerraform(this._passwordHashWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_hash_wo_version: {
        value: cdktn.numberToHclTerraform(this._passwordHashWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password_wo: {
        value: cdktn.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo_version: {
        value: cdktn.numberToHclTerraform(this._passwordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_bound_cidrs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenBoundCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_explicit_max_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenExplicitMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_max_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_no_default_policy: {
        value: cdktn.booleanToHclTerraform(this._tokenNoDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_num_uses: {
        value: cdktn.numberToHclTerraform(this._tokenNumUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_period: {
        value: cdktn.numberToHclTerraform(this._tokenPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_type: {
        value: cdktn.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
