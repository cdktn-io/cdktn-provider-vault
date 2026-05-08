# `secretsSyncAwsDestination` Submodule <a name="`secretsSyncAwsDestination` Submodule" id="@cdktn/provider-vault.secretsSyncAwsDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAwsDestination <a name="SecretsSyncAwsDestination" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination vault_secrets_sync_aws_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncAwsDestination(Construct Scope, string Id, SecretsSyncAwsDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig">SecretsSyncAwsDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig">SecretsSyncAwsDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv4Addresses">ResetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv6Addresses">ResetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetDisableStrictNetworking">ResetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWo">ResetIdentityTokenAudienceWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWoVersion">ResetIdentityTokenAudienceWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWo">ResetIdentityTokenKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWoVersion">ResetIdentityTokenKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate">ResetSecretNameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetAllowedIpv4Addresses` <a name="ResetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv4Addresses"></a>

```csharp
private void ResetAllowedIpv4Addresses()
```

##### `ResetAllowedIpv6Addresses` <a name="ResetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedIpv6Addresses"></a>

```csharp
private void ResetAllowedIpv6Addresses()
```

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAllowedPorts"></a>

```csharp
private void ResetAllowedPorts()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDisableStrictNetworking` <a name="ResetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetDisableStrictNetworking"></a>

```csharp
private void ResetDisableStrictNetworking()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity"></a>

```csharp
private void ResetGranularity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudienceWo` <a name="ResetIdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWo"></a>

```csharp
private void ResetIdentityTokenAudienceWo()
```

##### `ResetIdentityTokenAudienceWoVersion` <a name="ResetIdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenAudienceWoVersion"></a>

```csharp
private void ResetIdentityTokenAudienceWoVersion()
```

##### `ResetIdentityTokenKeyWo` <a name="ResetIdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWo"></a>

```csharp
private void ResetIdentityTokenKeyWo()
```

##### `ResetIdentityTokenKeyWoVersion` <a name="ResetIdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenKeyWoVersion"></a>

```csharp
private void ResetIdentityTokenKeyWoVersion()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```

##### `ResetSecretNameTemplate` <a name="ResetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate"></a>

```csharp
private void ResetSecretNameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncAwsDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAwsDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAwsDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAwsDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAwsDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsSyncAwsDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncAwsDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncAwsDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncAwsDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4AddressesInput">AllowedIpv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6AddressesInput">AllowedIpv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworkingInput">DisableStrictNetworkingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoInput">IdentityTokenAudienceWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersionInput">IdentityTokenAudienceWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoInput">IdentityTokenKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersionInput">IdentityTokenKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput">SecretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWo">IdentityTokenAudienceWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersion">IdentityTokenAudienceWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWo">IdentityTokenKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersion">IdentityTokenKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AllowedIpv4AddressesInput`<sup>Optional</sup> <a name="AllowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4AddressesInput"></a>

```csharp
public string[] AllowedIpv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6AddressesInput`<sup>Optional</sup> <a name="AllowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6AddressesInput"></a>

```csharp
public string[] AllowedIpv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPortsInput"></a>

```csharp
public double[] AllowedPortsInput { get; }
```

- *Type:* double[]

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableStrictNetworkingInput`<sup>Optional</sup> <a name="DisableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworkingInput"></a>

```csharp
public bool|IResolvable DisableStrictNetworkingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoInput`<sup>Optional</sup> <a name="IdentityTokenAudienceWoInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoInput"></a>

```csharp
public string IdentityTokenAudienceWoInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoVersionInput`<sup>Optional</sup> <a name="IdentityTokenAudienceWoVersionInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersionInput"></a>

```csharp
public double IdentityTokenAudienceWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentityTokenKeyWoInput`<sup>Optional</sup> <a name="IdentityTokenKeyWoInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoInput"></a>

```csharp
public string IdentityTokenKeyWoInput { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyWoVersionInput`<sup>Optional</sup> <a name="IdentityTokenKeyWoVersionInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersionInput"></a>

```csharp
public double IdentityTokenKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `SecretNameTemplateInput`<sup>Optional</sup> <a name="SecretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput"></a>

```csharp
public string SecretNameTemplateInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AllowedIpv4Addresses`<sup>Required</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6Addresses`<sup>Required</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; }
```

- *Type:* double[]

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableStrictNetworking`<sup>Required</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWo`<sup>Required</sup> <a name="IdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWo"></a>

```csharp
public string IdentityTokenAudienceWo { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoVersion`<sup>Required</sup> <a name="IdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenAudienceWoVersion"></a>

```csharp
public double IdentityTokenAudienceWoVersion { get; }
```

- *Type:* double

---

##### `IdentityTokenKeyWo`<sup>Required</sup> <a name="IdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWo"></a>

```csharp
public string IdentityTokenKeyWo { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyWoVersion`<sup>Required</sup> <a name="IdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenKeyWoVersion"></a>

```csharp
public double IdentityTokenKeyWoVersion { get; }
```

- *Type:* double

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `SecretNameTemplate`<sup>Required</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAwsDestinationConfig <a name="SecretsSyncAwsDestinationConfig" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncAwsDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AccessKeyId = null,
    string[] AllowedIpv4Addresses = null,
    string[] AllowedIpv6Addresses = null,
    double[] AllowedPorts = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    bool|IResolvable DisableStrictNetworking = null,
    string ExternalId = null,
    string Granularity = null,
    string Id = null,
    string IdentityTokenAudienceWo = null,
    double IdentityTokenAudienceWoVersion = null,
    string IdentityTokenKeyWo = null,
    double IdentityTokenKeyWoVersion = null,
    double IdentityTokenTtl = null,
    string Namespace = null,
    string Region = null,
    string RoleArn = null,
    string SecretAccessKey = null,
    string SecretNameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name">Name</a></code> | <code>string</code> | Unique name of the AWS destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Access key id to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | Allowed ports for outbound connections from Vault to AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Extra protection that must match the trust policy granting access to the AWS IAM role ARN. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity">Granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWo">IdentityTokenAudienceWo</a></code> | <code>string</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWoVersion">IdentityTokenAudienceWoVersion</a></code> | <code>double</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWo">IdentityTokenKeyWo</a></code> | <code>string</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWoVersion">IdentityTokenKeyWoVersion</a></code> | <code>double</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region">Region</a></code> | <code>string</code> | Region where to manage the secrets manager entries. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Specifies a role to assume when connecting to AWS. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Secret access key to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name of the AWS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Access key id to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}

---

##### `AllowedIpv4Addresses`<sup>Optional</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; set; }
```

- *Type:* string[]

Allowed IPv4 addresses for outbound connections from Vault to AWS Secrets Manager.

Can also be set via an IP address range using CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#allowed_ipv4_addresses SecretsSyncAwsDestination#allowed_ipv4_addresses}

---

##### `AllowedIpv6Addresses`<sup>Optional</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; set; }
```

- *Type:* string[]

Allowed IPv6 addresses for outbound connections from Vault to AWS Secrets Manager.

Can also be set via an IP address range using CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#allowed_ipv6_addresses SecretsSyncAwsDestination#allowed_ipv6_addresses}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; set; }
```

- *Type:* double[]

Allowed ports for outbound connections from Vault to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#allowed_ports SecretsSyncAwsDestination#allowed_ports}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}

---

##### `DisableStrictNetworking`<sup>Optional</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable strict networking mode. When set to true, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#disable_strict_networking SecretsSyncAwsDestination#disable_strict_networking}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Extra protection that must match the trust policy granting access to the AWS IAM role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudienceWo`<sup>Optional</sup> <a name="IdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWo"></a>

```csharp
public string IdentityTokenAudienceWo { get; set; }
```

- *Type:* string

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#identity_token_audience_wo SecretsSyncAwsDestination#identity_token_audience_wo}

---

##### `IdentityTokenAudienceWoVersion`<sup>Optional</sup> <a name="IdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenAudienceWoVersion"></a>

```csharp
public double IdentityTokenAudienceWoVersion { get; set; }
```

- *Type:* double

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#identity_token_audience_wo_version SecretsSyncAwsDestination#identity_token_audience_wo_version}

---

##### `IdentityTokenKeyWo`<sup>Optional</sup> <a name="IdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWo"></a>

```csharp
public string IdentityTokenKeyWo { get; set; }
```

- *Type:* string

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#identity_token_key_wo SecretsSyncAwsDestination#identity_token_key_wo}

---

##### `IdentityTokenKeyWoVersion`<sup>Optional</sup> <a name="IdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenKeyWoVersion"></a>

```csharp
public double IdentityTokenKeyWoVersion { get; set; }
```

- *Type:* double

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#identity_token_key_wo_version SecretsSyncAwsDestination#identity_token_key_wo_version}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#identity_token_ttl SecretsSyncAwsDestination#identity_token_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where to manage the secrets manager entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Specifies a role to assume when connecting to AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Secret access key to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}

---

##### `SecretNameTemplate`<sup>Optional</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; set; }
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}

---



