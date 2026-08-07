# `ephemeralVaultAzureAccessCredentials` Submodule <a name="`ephemeralVaultAzureAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAzureAccessCredentials <a name="EphemeralVaultAzureAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_credentials.EphemeralVaultAzureAccessCredentials;

EphemeralVaultAzureAccessCredentials.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .environment(java.lang.String)
//  .maxCredValidationSeconds(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .numSecondsBetweenTests(java.lang.Number)
//  .numSequentialSuccesses(java.lang.Number)
//  .requestMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .validateCreds(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.requestMetadata">requestMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input metadata to send with the request to Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.validateCreds">validateCreds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#backend EphemeralVaultAzureAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#role EphemeralVaultAzureAccessCredentials#role}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#environment EphemeralVaultAzureAccessCredentials#environment}

---

##### `maxCredValidationSeconds`<sup>Optional</sup> <a name="maxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.maxCredValidationSeconds"></a>

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#max_cred_validation_seconds EphemeralVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#mount_id EphemeralVaultAzureAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#namespace EphemeralVaultAzureAccessCredentials#namespace}

---

##### `numSecondsBetweenTests`<sup>Optional</sup> <a name="numSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.numSecondsBetweenTests"></a>

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_seconds_between_tests EphemeralVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `numSequentialSuccesses`<sup>Optional</sup> <a name="numSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.numSequentialSuccesses"></a>

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_sequential_successes EphemeralVaultAzureAccessCredentials#num_sequential_successes}

---

##### `requestMetadata`<sup>Optional</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.requestMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#request_metadata EphemeralVaultAzureAccessCredentials#request_metadata}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#subscription_id EphemeralVaultAzureAccessCredentials#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#tenant_id EphemeralVaultAzureAccessCredentials#tenant_id}

---

##### `validateCreds`<sup>Optional</sup> <a name="validateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.Initializer.parameter.validateCreds"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#validate_creds EphemeralVaultAzureAccessCredentials#validate_creds}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds">resetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests">resetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses">resetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata">resetRequestMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds">resetValidateCreds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetMaxCredValidationSeconds` <a name="resetMaxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```java
public void resetMaxCredValidationSeconds()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNumSecondsBetweenTests` <a name="resetNumSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```java
public void resetNumSecondsBetweenTests()
```

##### `resetNumSequentialSuccesses` <a name="resetNumSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```java
public void resetNumSequentialSuccesses()
```

##### `resetRequestMetadata` <a name="resetRequestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetRequestMetadata"></a>

```java
public void resetRequestMetadata()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetValidateCreds` <a name="resetValidateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.resetValidateCreds"></a>

```java
public void resetValidateCreds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_credentials.EphemeralVaultAzureAccessCredentials;

EphemeralVaultAzureAccessCredentials.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_credentials.EphemeralVaultAzureAccessCredentials;

EphemeralVaultAzureAccessCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_credentials.EphemeralVaultAzureAccessCredentials;

EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime">leaseStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">maxCredValidationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">numSecondsBetweenTestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput">numSequentialSuccessesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput">requestMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput">validateCredsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata">requestMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds">validateCreds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseRenewable"></a>

```java
public IResolvable getLeaseRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.leaseStartTime"></a>

```java
public java.lang.String getLeaseStartTime();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `maxCredValidationSecondsInput`<sup>Optional</sup> <a name="maxCredValidationSecondsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```java
public java.lang.Number getMaxCredValidationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `numSecondsBetweenTestsInput`<sup>Optional</sup> <a name="numSecondsBetweenTestsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```java
public java.lang.Number getNumSecondsBetweenTestsInput();
```

- *Type:* java.lang.Number

---

##### `numSequentialSuccessesInput`<sup>Optional</sup> <a name="numSequentialSuccessesInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```java
public java.lang.Number getNumSequentialSuccessesInput();
```

- *Type:* java.lang.Number

---

##### `requestMetadataInput`<sup>Optional</sup> <a name="requestMetadataInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `validateCredsInput`<sup>Optional</sup> <a name="validateCredsInput" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCredsInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateCredsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `maxCredValidationSeconds`<sup>Required</sup> <a name="maxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```java
public java.lang.Number getMaxCredValidationSeconds();
```

- *Type:* java.lang.Number

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `numSecondsBetweenTests`<sup>Required</sup> <a name="numSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```java
public java.lang.Number getNumSecondsBetweenTests();
```

- *Type:* java.lang.Number

---

##### `numSequentialSuccesses`<sup>Required</sup> <a name="numSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```java
public java.lang.Number getNumSequentialSuccesses();
```

- *Type:* java.lang.Number

---

##### `requestMetadata`<sup>Required</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.requestMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `validateCreds`<sup>Required</sup> <a name="validateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.validateCreds"></a>

```java
public java.lang.Boolean|IResolvable getValidateCreds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAzureAccessCredentialsConfig <a name="EphemeralVaultAzureAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_azure_access_credentials.EphemeralVaultAzureAccessCredentialsConfig;

EphemeralVaultAzureAccessCredentialsConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .environment(java.lang.String)
//  .maxCredValidationSeconds(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .numSecondsBetweenTests(java.lang.Number)
//  .numSequentialSuccesses(java.lang.Number)
//  .requestMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .subscriptionId(java.lang.String)
//  .tenantId(java.lang.String)
//  .validateCreds(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role">role</a></code> | <code>java.lang.String</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>java.lang.Number</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata">requestMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Input metadata to send with the request to Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds">validateCreds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#backend EphemeralVaultAzureAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#role EphemeralVaultAzureAccessCredentials#role}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The Azure environment to use during credential validation. Defaults to the Azure Public Cloud. Some possible values: AzurePublicCloud, AzureUSGovernmentCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#environment EphemeralVaultAzureAccessCredentials#environment}

---

##### `maxCredValidationSeconds`<sup>Optional</sup> <a name="maxCredValidationSeconds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```java
public java.lang.Number getMaxCredValidationSeconds();
```

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#max_cred_validation_seconds EphemeralVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#mount_id EphemeralVaultAzureAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#namespace EphemeralVaultAzureAccessCredentials#namespace}

---

##### `numSecondsBetweenTests`<sup>Optional</sup> <a name="numSecondsBetweenTests" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```java
public java.lang.Number getNumSecondsBetweenTests();
```

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_seconds_between_tests EphemeralVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `numSequentialSuccesses`<sup>Optional</sup> <a name="numSequentialSuccesses" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```java
public java.lang.Number getNumSequentialSuccesses();
```

- *Type:* java.lang.Number

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#num_sequential_successes EphemeralVaultAzureAccessCredentials#num_sequential_successes}

---

##### `requestMetadata`<sup>Optional</sup> <a name="requestMetadata" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.requestMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Input metadata to send with the request to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#request_metadata EphemeralVaultAzureAccessCredentials#request_metadata}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#subscription_id EphemeralVaultAzureAccessCredentials#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#tenant_id EphemeralVaultAzureAccessCredentials#tenant_id}

---

##### `validateCreds`<sup>Optional</sup> <a name="validateCreds" id="@cdktn/provider-vault.ephemeralVaultAzureAccessCredentials.EphemeralVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```java
public java.lang.Boolean|IResolvable getValidateCreds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/azure_access_credentials#validate_creds EphemeralVaultAzureAccessCredentials#validate_creds}

---



