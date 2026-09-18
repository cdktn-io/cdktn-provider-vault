/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiExternalCaSecretBackendDnsProviderAwsRoute53Config extends cdktn.TerraformMetaArguments {
  /**
  * AWS access key ID for Route53 API access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * AWS IAM role ARN to assume for Route53 operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * External ID for AWS STS AssumeRole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}
  */
  readonly externalId?: string;
  /**
  * AWS Route53 hosted zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
  /**
  * List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}
  */
  readonly identifiers: string[];
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}
  */
  readonly mount: string;
  /**
  * Name of the DNS provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}
  */
  readonly name: string;
  /**
  * Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}
  */
  readonly namespace?: string;
  /**
  * AWS region for Route53 operations. Defaults to `us-east-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}
  */
  readonly region?: string;
  /**
  * AWS secret access key for Route53 API access. Write-only — not returned by Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}
  */
  readonly secretAccessKeyWo?: string;
  /**
  * Version counter for the write-only `secret_access_key` field. Increment this value to trigger an update to the secret access key in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}
  */
  readonly secretAccessKeyWoVersion?: number;
  /**
  * TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53}
*/
export class PkiExternalCaSecretBackendDnsProviderAwsRoute53 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_external_ca_secret_backend_dns_provider_aws_route53";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import
  * @param importFromId The id of the existing PkiExternalCaSecretBackendDnsProviderAwsRoute53 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_external_ca_secret_backend_dns_provider_aws_route53", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiExternalCaSecretBackendDnsProviderAwsRoute53Config
  */
  public constructor(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderAwsRoute53Config) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_external_ca_secret_backend_dns_provider_aws_route53',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
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
    this._accessKeyId = config.accessKeyId;
    this._assumeRoleArn = config.assumeRoleArn;
    this._externalId = config.externalId;
    this._hostedZoneId = config.hostedZoneId;
    this._identifiers = config.identifiers;
    this._mount = config.mount;
    this._name = config.name;
    this._nameserver = config.nameserver;
    this._namespace = config.namespace;
    this._region = config.region;
    this._secretAccessKeyWo = config.secretAccessKeyWo;
    this._secretAccessKeyWoVersion = config.secretAccessKeyWoVersion;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // hosted_zone_id - computed: false, optional: true, required: false
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_access_key_wo - computed: false, optional: true, required: false
  private _secretAccessKeyWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get secretAccessKeyWo() {
    return this.getStringAttribute('secret_access_key_wo');
  }
  public set secretAccessKeyWo(value: string) {
    this._secretAccessKeyWo = value;
  }
  public resetSecretAccessKeyWo() {
    this._secretAccessKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyWoInput() {
    return this._secretAccessKeyWo;
  }

  // secret_access_key_wo_version - computed: false, optional: true, required: false
  private _secretAccessKeyWoVersion?: number; 
  public get secretAccessKeyWoVersion() {
    return this.getNumberAttribute('secret_access_key_wo_version');
  }
  public set secretAccessKeyWoVersion(value: number) {
    this._secretAccessKeyWoVersion = value;
  }
  public resetSecretAccessKeyWoVersion() {
    this._secretAccessKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyWoVersionInput() {
    return this._secretAccessKeyWoVersion;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktn.stringToTerraform(this._accessKeyId),
      assume_role_arn: cdktn.stringToTerraform(this._assumeRoleArn),
      external_id: cdktn.stringToTerraform(this._externalId),
      hosted_zone_id: cdktn.stringToTerraform(this._hostedZoneId),
      identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identifiers),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      nameserver: cdktn.stringToTerraform(this._nameserver),
      namespace: cdktn.stringToTerraform(this._namespace),
      region: cdktn.stringToTerraform(this._region),
      secret_access_key_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._secretAccessKeyWo)),
      secret_access_key_wo_version: cdktn.numberToTerraform(this._secretAccessKeyWoVersion),
      ttl: cdktn.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktn.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role_arn: {
        value: cdktn.stringToHclTerraform(this._assumeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktn.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosted_zone_id: {
        value: cdktn.stringToHclTerraform(this._hostedZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver: {
        value: cdktn.stringToHclTerraform(this._nameserver),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._secretAccessKeyWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key_wo_version: {
        value: cdktn.numberToHclTerraform(this._secretAccessKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
