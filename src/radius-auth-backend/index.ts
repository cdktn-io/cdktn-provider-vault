/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RadiusAuthBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * A map of string to string that will be set as metadata on the identity alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}
  */
  readonly aliasMetadata?: { [key: string]: string };
  /**
  * Number of seconds to wait for a backend connection before timing out. Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}
  */
  readonly dialTimeout?: number;
  /**
  * The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}
  */
  readonly host: string;
  /**
  * Path of the enabled RADIUS auth backend mount to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * The NAS-Port attribute of the RADIUS request. Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}
  */
  readonly nasPort?: number;
  /**
  * The UDP port where the RADIUS server is listening on. Defaults to `1812`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}
  */
  readonly port?: number;
  /**
  * Number of seconds to wait for a response from the RADIUS server. Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * The RADIUS shared secret. This is a write-only field and will not be read back from Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}
  */
  readonly secretWo: string;
  /**
  * Version counter for the write-only `secret_wo` field. Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}
  */
  readonly secretWoVersion: number;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}
  */
  readonly tokenType?: string;
  /**
  * A set of policies to be granted to unregistered users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}
  */
  readonly unregisteredUserPolicies?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend vault_radius_auth_backend}
*/
export class RadiusAuthBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_radius_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusAuthBackend to import
  * @param importFromId The id of the existing RadiusAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_radius_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend vault_radius_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusAuthBackendConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusAuthBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_radius_auth_backend',
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
    this._dialTimeout = config.dialTimeout;
    this._host = config.host;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._nasPort = config.nasPort;
    this._port = config.port;
    this._readTimeout = config.readTimeout;
    this._secretWo = config.secretWo;
    this._secretWoVersion = config.secretWoVersion;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
    this._unregisteredUserPolicies = config.unregisteredUserPolicies;
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

  // dial_timeout - computed: true, optional: true, required: false
  private _dialTimeout?: number; 
  public get dialTimeout() {
    return this.getNumberAttribute('dial_timeout');
  }
  public set dialTimeout(value: number) {
    this._dialTimeout = value;
  }
  public resetDialTimeout() {
    this._dialTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialTimeoutInput() {
    return this._dialTimeout;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // nas_identifier - computed: true, optional: false, required: false
  public get nasIdentifier() {
    return this.getStringAttribute('nas_identifier');
  }

  // nas_port - computed: true, optional: true, required: false
  private _nasPort?: number; 
  public get nasPort() {
    return this.getNumberAttribute('nas_port');
  }
  public set nasPort(value: number) {
    this._nasPort = value;
  }
  public resetNasPort() {
    this._nasPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasPortInput() {
    return this._nasPort;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // secret_wo - computed: false, optional: false, required: true
  private _secretWo?: string; 
  public get secretWo() {
    return this.getStringAttribute('secret_wo');
  }
  public set secretWo(value: string) {
    this._secretWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretWoInput() {
    return this._secretWo;
  }

  // secret_wo_version - computed: false, optional: false, required: true
  private _secretWoVersion?: number; 
  public get secretWoVersion() {
    return this.getNumberAttribute('secret_wo_version');
  }
  public set secretWoVersion(value: number) {
    this._secretWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretWoVersionInput() {
    return this._secretWoVersion;
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

  // unregistered_user_policies - computed: false, optional: true, required: false
  private _unregisteredUserPolicies?: string[]; 
  public get unregisteredUserPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('unregistered_user_policies'));
  }
  public set unregisteredUserPolicies(value: string[]) {
    this._unregisteredUserPolicies = value;
  }
  public resetUnregisteredUserPolicies() {
    this._unregisteredUserPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unregisteredUserPoliciesInput() {
    return this._unregisteredUserPolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._aliasMetadata),
      dial_timeout: cdktn.numberToTerraform(this._dialTimeout),
      host: cdktn.stringToTerraform(this._host),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      nas_port: cdktn.numberToTerraform(this._nasPort),
      port: cdktn.numberToTerraform(this._port),
      read_timeout: cdktn.numberToTerraform(this._readTimeout),
      secret_wo: cdktn.stringToTerraform(this._secretWo),
      secret_wo_version: cdktn.numberToTerraform(this._secretWoVersion),
      token_bound_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktn.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktn.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktn.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktn.numberToTerraform(this._tokenNumUses),
      token_period: cdktn.numberToTerraform(this._tokenPeriod),
      token_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktn.numberToTerraform(this._tokenTtl),
      token_type: cdktn.stringToTerraform(this._tokenType),
      unregistered_user_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._unregisteredUserPolicies),
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
      dial_timeout: {
        value: cdktn.numberToHclTerraform(this._dialTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktn.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      nas_port: {
        value: cdktn.numberToHclTerraform(this._nasPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktn.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_timeout: {
        value: cdktn.numberToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_wo: {
        value: cdktn.stringToHclTerraform(this._secretWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_wo_version: {
        value: cdktn.numberToHclTerraform(this._secretWoVersion),
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
      unregistered_user_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._unregisteredUserPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
