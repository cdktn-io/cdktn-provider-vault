/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuotaConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Absolute paths exempt from all rate limit quotas, qualified from the root of the namespace hierarchy. This field is effectively root-managed; administrative namespaces can read returned values but cannot reliably manage them. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#absolute_rate_limit_exempt_paths QuotaConfig#absolute_rate_limit_exempt_paths}
  */
  readonly absoluteRateLimitExemptPaths?: string[];
  /**
  * Enables audit logging for requests rejected by rate limit quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#enable_rate_limit_audit_logging QuotaConfig#enable_rate_limit_audit_logging}
  */
  readonly enableRateLimitAuditLogging?: boolean | cdktn.IResolvable;
  /**
  * Enables rate limit response headers on HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#enable_rate_limit_response_headers QuotaConfig#enable_rate_limit_response_headers}
  */
  readonly enableRateLimitResponseHeaders?: boolean | cdktn.IResolvable;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#namespace QuotaConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Paths exempt from rate limit quotas relative to the current namespace context. This endpoint is only callable from the root or an administrative namespace, and exemption updates are effectively root-managed. Order is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#rate_limit_exempt_paths QuotaConfig#rate_limit_exempt_paths}
  */
  readonly rateLimitExemptPaths?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config vault_quota_config}
*/
export class QuotaConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_quota_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuotaConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuotaConfig to import
  * @param importFromId The id of the existing QuotaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuotaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_quota_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/quota_config vault_quota_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotaConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuotaConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_quota_config',
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
    this._absoluteRateLimitExemptPaths = config.absoluteRateLimitExemptPaths;
    this._enableRateLimitAuditLogging = config.enableRateLimitAuditLogging;
    this._enableRateLimitResponseHeaders = config.enableRateLimitResponseHeaders;
    this._namespace = config.namespace;
    this._rateLimitExemptPaths = config.rateLimitExemptPaths;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absolute_rate_limit_exempt_paths - computed: true, optional: true, required: false
  private _absoluteRateLimitExemptPaths?: string[]; 
  public get absoluteRateLimitExemptPaths() {
    return cdktn.Fn.tolist(this.getListAttribute('absolute_rate_limit_exempt_paths'));
  }
  public set absoluteRateLimitExemptPaths(value: string[]) {
    this._absoluteRateLimitExemptPaths = value;
  }
  public resetAbsoluteRateLimitExemptPaths() {
    this._absoluteRateLimitExemptPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteRateLimitExemptPathsInput() {
    return this._absoluteRateLimitExemptPaths;
  }

  // enable_rate_limit_audit_logging - computed: true, optional: true, required: false
  private _enableRateLimitAuditLogging?: boolean | cdktn.IResolvable; 
  public get enableRateLimitAuditLogging() {
    return this.getBooleanAttribute('enable_rate_limit_audit_logging');
  }
  public set enableRateLimitAuditLogging(value: boolean | cdktn.IResolvable) {
    this._enableRateLimitAuditLogging = value;
  }
  public resetEnableRateLimitAuditLogging() {
    this._enableRateLimitAuditLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRateLimitAuditLoggingInput() {
    return this._enableRateLimitAuditLogging;
  }

  // enable_rate_limit_response_headers - computed: true, optional: true, required: false
  private _enableRateLimitResponseHeaders?: boolean | cdktn.IResolvable; 
  public get enableRateLimitResponseHeaders() {
    return this.getBooleanAttribute('enable_rate_limit_response_headers');
  }
  public set enableRateLimitResponseHeaders(value: boolean | cdktn.IResolvable) {
    this._enableRateLimitResponseHeaders = value;
  }
  public resetEnableRateLimitResponseHeaders() {
    this._enableRateLimitResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRateLimitResponseHeadersInput() {
    return this._enableRateLimitResponseHeaders;
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

  // rate_limit_exempt_paths - computed: true, optional: true, required: false
  private _rateLimitExemptPaths?: string[]; 
  public get rateLimitExemptPaths() {
    return cdktn.Fn.tolist(this.getListAttribute('rate_limit_exempt_paths'));
  }
  public set rateLimitExemptPaths(value: string[]) {
    this._rateLimitExemptPaths = value;
  }
  public resetRateLimitExemptPaths() {
    this._rateLimitExemptPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitExemptPathsInput() {
    return this._rateLimitExemptPaths;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      absolute_rate_limit_exempt_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._absoluteRateLimitExemptPaths),
      enable_rate_limit_audit_logging: cdktn.booleanToTerraform(this._enableRateLimitAuditLogging),
      enable_rate_limit_response_headers: cdktn.booleanToTerraform(this._enableRateLimitResponseHeaders),
      namespace: cdktn.stringToTerraform(this._namespace),
      rate_limit_exempt_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(this._rateLimitExemptPaths),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      absolute_rate_limit_exempt_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._absoluteRateLimitExemptPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_rate_limit_audit_logging: {
        value: cdktn.booleanToHclTerraform(this._enableRateLimitAuditLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rate_limit_response_headers: {
        value: cdktn.booleanToHclTerraform(this._enableRateLimitResponseHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_exempt_paths: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._rateLimitExemptPaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
