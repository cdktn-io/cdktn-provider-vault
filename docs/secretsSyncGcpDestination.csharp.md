# `secretsSyncGcpDestination` Submodule <a name="`secretsSyncGcpDestination` Submodule" id="@cdktn/provider-vault.secretsSyncGcpDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGcpDestination <a name="SecretsSyncGcpDestination" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncGcpDestination(Construct Scope, string Id, SecretsSyncGcpDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig">SecretsSyncGcpDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig">SecretsSyncGcpDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses">ResetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses">ResetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking">ResetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey">ResetGlobalKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWo">ResetIdentityTokenAudienceWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWoVersion">ResetIdentityTokenAudienceWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWo">ResetIdentityTokenKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWoVersion">ResetIdentityTokenKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys">ResetLocationalKmsKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations">ResetReplicationLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate">ResetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedIpv4Addresses` <a name="ResetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses"></a>

```csharp
private void ResetAllowedIpv4Addresses()
```

##### `ResetAllowedIpv6Addresses` <a name="ResetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses"></a>

```csharp
private void ResetAllowedIpv6Addresses()
```

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts"></a>

```csharp
private void ResetAllowedPorts()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDisableStrictNetworking` <a name="ResetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking"></a>

```csharp
private void ResetDisableStrictNetworking()
```

##### `ResetGlobalKmsKey` <a name="ResetGlobalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey"></a>

```csharp
private void ResetGlobalKmsKey()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity"></a>

```csharp
private void ResetGranularity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudienceWo` <a name="ResetIdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWo"></a>

```csharp
private void ResetIdentityTokenAudienceWo()
```

##### `ResetIdentityTokenAudienceWoVersion` <a name="ResetIdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenAudienceWoVersion"></a>

```csharp
private void ResetIdentityTokenAudienceWoVersion()
```

##### `ResetIdentityTokenKeyWo` <a name="ResetIdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWo"></a>

```csharp
private void ResetIdentityTokenKeyWo()
```

##### `ResetIdentityTokenKeyWoVersion` <a name="ResetIdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenKeyWoVersion"></a>

```csharp
private void ResetIdentityTokenKeyWoVersion()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetLocationalKmsKeys` <a name="ResetLocationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys"></a>

```csharp
private void ResetLocationalKmsKeys()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetReplicationLocations` <a name="ResetReplicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations"></a>

```csharp
private void ResetReplicationLocations()
```

##### `ResetSecretNameTemplate` <a name="ResetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate"></a>

```csharp
private void ResetSecretNameTemplate()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGcpDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGcpDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGcpDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGcpDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncGcpDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncGcpDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncGcpDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput">AllowedIpv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput">AllowedIpv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput">DisableStrictNetworkingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput">GlobalKmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoInput">IdentityTokenAudienceWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersionInput">IdentityTokenAudienceWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoInput">IdentityTokenKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersionInput">IdentityTokenKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput">LocationalKmsKeysInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput">ReplicationLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput">SecretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey">GlobalKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWo">IdentityTokenAudienceWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersion">IdentityTokenAudienceWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWo">IdentityTokenKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersion">IdentityTokenKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys">LocationalKmsKeys</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations">ReplicationLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AllowedIpv4AddressesInput`<sup>Optional</sup> <a name="AllowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput"></a>

```csharp
public string[] AllowedIpv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6AddressesInput`<sup>Optional</sup> <a name="AllowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput"></a>

```csharp
public string[] AllowedIpv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput"></a>

```csharp
public double[] AllowedPortsInput { get; }
```

- *Type:* double[]

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableStrictNetworkingInput`<sup>Optional</sup> <a name="DisableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput"></a>

```csharp
public bool|IResolvable DisableStrictNetworkingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalKmsKeyInput`<sup>Optional</sup> <a name="GlobalKmsKeyInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput"></a>

```csharp
public string GlobalKmsKeyInput { get; }
```

- *Type:* string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoInput`<sup>Optional</sup> <a name="IdentityTokenAudienceWoInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoInput"></a>

```csharp
public string IdentityTokenAudienceWoInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoVersionInput`<sup>Optional</sup> <a name="IdentityTokenAudienceWoVersionInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersionInput"></a>

```csharp
public double IdentityTokenAudienceWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentityTokenKeyWoInput`<sup>Optional</sup> <a name="IdentityTokenKeyWoInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoInput"></a>

```csharp
public string IdentityTokenKeyWoInput { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyWoVersionInput`<sup>Optional</sup> <a name="IdentityTokenKeyWoVersionInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersionInput"></a>

```csharp
public double IdentityTokenKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationalKmsKeysInput`<sup>Optional</sup> <a name="LocationalKmsKeysInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LocationalKmsKeysInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ReplicationLocationsInput`<sup>Optional</sup> <a name="ReplicationLocationsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput"></a>

```csharp
public string[] ReplicationLocationsInput { get; }
```

- *Type:* string[]

---

##### `SecretNameTemplateInput`<sup>Optional</sup> <a name="SecretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput"></a>

```csharp
public string SecretNameTemplateInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `AllowedIpv4Addresses`<sup>Required</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6Addresses`<sup>Required</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; }
```

- *Type:* double[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableStrictNetworking`<sup>Required</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalKmsKey`<sup>Required</sup> <a name="GlobalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey"></a>

```csharp
public string GlobalKmsKey { get; }
```

- *Type:* string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWo`<sup>Required</sup> <a name="IdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWo"></a>

```csharp
public string IdentityTokenAudienceWo { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoVersion`<sup>Required</sup> <a name="IdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenAudienceWoVersion"></a>

```csharp
public double IdentityTokenAudienceWoVersion { get; }
```

- *Type:* double

---

##### `IdentityTokenKeyWo`<sup>Required</sup> <a name="IdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWo"></a>

```csharp
public string IdentityTokenKeyWo { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyWoVersion`<sup>Required</sup> <a name="IdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenKeyWoVersion"></a>

```csharp
public double IdentityTokenKeyWoVersion { get; }
```

- *Type:* double

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `LocationalKmsKeys`<sup>Required</sup> <a name="LocationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LocationalKmsKeys { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ReplicationLocations`<sup>Required</sup> <a name="ReplicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations"></a>

```csharp
public string[] ReplicationLocations { get; }
```

- *Type:* string[]

---

##### `SecretNameTemplate`<sup>Required</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGcpDestinationConfig <a name="SecretsSyncGcpDestinationConfig" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncGcpDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] AllowedIpv4Addresses = null,
    string[] AllowedIpv6Addresses = null,
    double[] AllowedPorts = null,
    string Credentials = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    bool|IResolvable DisableStrictNetworking = null,
    string GlobalKmsKey = null,
    string Granularity = null,
    string Id = null,
    string IdentityTokenAudienceWo = null,
    double IdentityTokenAudienceWoVersion = null,
    string IdentityTokenKeyWo = null,
    double IdentityTokenKeyWoVersion = null,
    double IdentityTokenTtl = null,
    System.Collections.Generic.IDictionary<string, string> LocationalKmsKeys = null,
    string Namespace = null,
    string ProjectId = null,
    string[] ReplicationLocations = null,
    string SecretNameTemplate = null,
    string ServiceAccountEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name">Name</a></code> | <code>string</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | Allowed ports for outbound network connectivity. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials">Credentials</a></code> | <code>string</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable strict networking requirements. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey">GlobalKmsKey</a></code> | <code>string</code> | Global KMS key for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity">Granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWo">IdentityTokenAudienceWo</a></code> | <code>string</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWoVersion">IdentityTokenAudienceWoVersion</a></code> | <code>double</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWo">IdentityTokenKeyWo</a></code> | <code>string</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWoVersion">IdentityTokenKeyWoVersion</a></code> | <code>double</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys">LocationalKmsKeys</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Locational KMS keys for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The target project to manage secrets in. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations">ReplicationLocations</a></code> | <code>string[]</code> | Replication locations for secrets. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service Account to impersonate for workload identity federation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `AllowedIpv4Addresses`<sup>Optional</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; set; }
```

- *Type:* string[]

Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}

---

##### `AllowedIpv6Addresses`<sup>Optional</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; set; }
```

- *Type:* string[]

Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; set; }
```

- *Type:* double[]

Allowed ports for outbound network connectivity. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `DisableStrictNetworking`<sup>Optional</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable strict networking requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}

---

##### `GlobalKmsKey`<sup>Optional</sup> <a name="GlobalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey"></a>

```csharp
public string GlobalKmsKey { get; set; }
```

- *Type:* string

Global KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudienceWo`<sup>Optional</sup> <a name="IdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWo"></a>

```csharp
public string IdentityTokenAudienceWo { get; set; }
```

- *Type:* string

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#identity_token_audience_wo SecretsSyncGcpDestination#identity_token_audience_wo}

---

##### `IdentityTokenAudienceWoVersion`<sup>Optional</sup> <a name="IdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenAudienceWoVersion"></a>

```csharp
public double IdentityTokenAudienceWoVersion { get; set; }
```

- *Type:* double

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#identity_token_audience_wo_version SecretsSyncGcpDestination#identity_token_audience_wo_version}

---

##### `IdentityTokenKeyWo`<sup>Optional</sup> <a name="IdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWo"></a>

```csharp
public string IdentityTokenKeyWo { get; set; }
```

- *Type:* string

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#identity_token_key_wo SecretsSyncGcpDestination#identity_token_key_wo}

---

##### `IdentityTokenKeyWoVersion`<sup>Optional</sup> <a name="IdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenKeyWoVersion"></a>

```csharp
public double IdentityTokenKeyWoVersion { get; set; }
```

- *Type:* double

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#identity_token_key_wo_version SecretsSyncGcpDestination#identity_token_key_wo_version}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#identity_token_ttl SecretsSyncGcpDestination#identity_token_ttl}

---

##### `LocationalKmsKeys`<sup>Optional</sup> <a name="LocationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LocationalKmsKeys { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Locational KMS keys for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `ReplicationLocations`<sup>Optional</sup> <a name="ReplicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations"></a>

```csharp
public string[] ReplicationLocations { get; set; }
```

- *Type:* string[]

Replication locations for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}

---

##### `SecretNameTemplate`<sup>Optional</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; set; }
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service Account to impersonate for workload identity federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gcp_destination#service_account_email SecretsSyncGcpDestination#service_account_email}

---



