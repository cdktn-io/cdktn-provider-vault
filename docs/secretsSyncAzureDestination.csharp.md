# `secretsSyncAzureDestination` Submodule <a name="`secretsSyncAzureDestination` Submodule" id="@cdktn/provider-vault.secretsSyncAzureDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAzureDestination <a name="SecretsSyncAzureDestination" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncAzureDestination(Construct Scope, string Id, SecretsSyncAzureDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig">SecretsSyncAzureDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig">SecretsSyncAzureDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv4Addresses">ResetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv6Addresses">ResetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetDisableStrictNetworking">ResetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWo">ResetIdentityTokenAudienceWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWoVersion">ResetIdentityTokenAudienceWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWo">ResetIdentityTokenKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWoVersion">ResetIdentityTokenKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri">ResetKeyVaultUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate">ResetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedIpv4Addresses` <a name="ResetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv4Addresses"></a>

```csharp
private void ResetAllowedIpv4Addresses()
```

##### `ResetAllowedIpv6Addresses` <a name="ResetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedIpv6Addresses"></a>

```csharp
private void ResetAllowedIpv6Addresses()
```

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetAllowedPorts"></a>

```csharp
private void ResetAllowedPorts()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetCloud` <a name="ResetCloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDisableStrictNetworking` <a name="ResetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetDisableStrictNetworking"></a>

```csharp
private void ResetDisableStrictNetworking()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity"></a>

```csharp
private void ResetGranularity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudienceWo` <a name="ResetIdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWo"></a>

```csharp
private void ResetIdentityTokenAudienceWo()
```

##### `ResetIdentityTokenAudienceWoVersion` <a name="ResetIdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenAudienceWoVersion"></a>

```csharp
private void ResetIdentityTokenAudienceWoVersion()
```

##### `ResetIdentityTokenKeyWo` <a name="ResetIdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWo"></a>

```csharp
private void ResetIdentityTokenKeyWo()
```

##### `ResetIdentityTokenKeyWoVersion` <a name="ResetIdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenKeyWoVersion"></a>

```csharp
private void ResetIdentityTokenKeyWoVersion()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetKeyVaultUri` <a name="ResetKeyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri"></a>

```csharp
private void ResetKeyVaultUri()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSecretNameTemplate` <a name="ResetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate"></a>

```csharp
private void ResetSecretNameTemplate()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncAzureDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAzureDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAzureDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAzureDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncAzureDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsSyncAzureDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncAzureDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncAzureDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncAzureDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4AddressesInput">AllowedIpv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6AddressesInput">AllowedIpv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworkingInput">DisableStrictNetworkingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoInput">IdentityTokenAudienceWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersionInput">IdentityTokenAudienceWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoInput">IdentityTokenKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersionInput">IdentityTokenKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput">KeyVaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput">SecretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWo">IdentityTokenAudienceWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersion">IdentityTokenAudienceWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWo">IdentityTokenKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersion">IdentityTokenKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri">KeyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AllowedIpv4AddressesInput`<sup>Optional</sup> <a name="AllowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4AddressesInput"></a>

```csharp
public string[] AllowedIpv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6AddressesInput`<sup>Optional</sup> <a name="AllowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6AddressesInput"></a>

```csharp
public string[] AllowedIpv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPortsInput"></a>

```csharp
public double[] AllowedPortsInput { get; }
```

- *Type:* double[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableStrictNetworkingInput`<sup>Optional</sup> <a name="DisableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworkingInput"></a>

```csharp
public bool|IResolvable DisableStrictNetworkingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoInput`<sup>Optional</sup> <a name="IdentityTokenAudienceWoInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoInput"></a>

```csharp
public string IdentityTokenAudienceWoInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoVersionInput`<sup>Optional</sup> <a name="IdentityTokenAudienceWoVersionInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersionInput"></a>

```csharp
public double IdentityTokenAudienceWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentityTokenKeyWoInput`<sup>Optional</sup> <a name="IdentityTokenKeyWoInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoInput"></a>

```csharp
public string IdentityTokenKeyWoInput { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyWoVersionInput`<sup>Optional</sup> <a name="IdentityTokenKeyWoVersionInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersionInput"></a>

```csharp
public double IdentityTokenKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultUriInput`<sup>Optional</sup> <a name="KeyVaultUriInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput"></a>

```csharp
public string KeyVaultUriInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SecretNameTemplateInput`<sup>Optional</sup> <a name="SecretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput"></a>

```csharp
public string SecretNameTemplateInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `AllowedIpv4Addresses`<sup>Required</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6Addresses`<sup>Required</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; }
```

- *Type:* double[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableStrictNetworking`<sup>Required</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWo`<sup>Required</sup> <a name="IdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWo"></a>

```csharp
public string IdentityTokenAudienceWo { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceWoVersion`<sup>Required</sup> <a name="IdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenAudienceWoVersion"></a>

```csharp
public double IdentityTokenAudienceWoVersion { get; }
```

- *Type:* double

---

##### `IdentityTokenKeyWo`<sup>Required</sup> <a name="IdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWo"></a>

```csharp
public string IdentityTokenKeyWo { get; }
```

- *Type:* string

---

##### `IdentityTokenKeyWoVersion`<sup>Required</sup> <a name="IdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenKeyWoVersion"></a>

```csharp
public double IdentityTokenKeyWoVersion { get; }
```

- *Type:* double

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `KeyVaultUri`<sup>Required</sup> <a name="KeyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri"></a>

```csharp
public string KeyVaultUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SecretNameTemplate`<sup>Required</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAzureDestinationConfig <a name="SecretsSyncAzureDestinationConfig" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncAzureDestinationConfig {
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
    string ClientId = null,
    string ClientSecret = null,
    string Cloud = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    bool|IResolvable DisableStrictNetworking = null,
    string Granularity = null,
    string Id = null,
    string IdentityTokenAudienceWo = null,
    double IdentityTokenAudienceWoVersion = null,
    string IdentityTokenKeyWo = null,
    double IdentityTokenKeyWoVersion = null,
    double IdentityTokenTtl = null,
    string KeyVaultUri = null,
    string Namespace = null,
    string SecretNameTemplate = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name">Name</a></code> | <code>string</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | Set of allowed ports for outbound connections from Vault to the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId">ClientId</a></code> | <code>string</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud">Cloud</a></code> | <code>string</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity">Granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWo">IdentityTokenAudienceWo</a></code> | <code>string</code> | The audience claim value for identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWoVersion">IdentityTokenAudienceWoVersion</a></code> | <code>double</code> | A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWo">IdentityTokenKeyWo</a></code> | <code>string</code> | The key to use for signing identity tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWoVersion">IdentityTokenKeyWoVersion</a></code> | <code>double</code> | A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated tokens. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri">KeyVaultUri</a></code> | <code>string</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId">TenantId</a></code> | <code>string</code> | ID of the target Azure tenant. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `AllowedIpv4Addresses`<sup>Optional</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; set; }
```

- *Type:* string[]

Set of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ipv4_addresses SecretsSyncAzureDestination#allowed_ipv4_addresses}

---

##### `AllowedIpv6Addresses`<sup>Optional</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; set; }
```

- *Type:* string[]

Set of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ipv6_addresses SecretsSyncAzureDestination#allowed_ipv6_addresses}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; set; }
```

- *Type:* double[]

Set of allowed ports for outbound connections from Vault to the destination.

If not set, all ports are allowed. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#allowed_ports SecretsSyncAzureDestination#allowed_ports}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `DisableStrictNetworking`<sup>Optional</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports. Requires Vault 1.19+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#disable_strict_networking SecretsSyncAzureDestination#disable_strict_networking}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudienceWo`<sup>Optional</sup> <a name="IdentityTokenAudienceWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWo"></a>

```csharp
public string IdentityTokenAudienceWo { get; set; }
```

- *Type:* string

The audience claim value for identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_audience_wo SecretsSyncAzureDestination#identity_token_audience_wo}

---

##### `IdentityTokenAudienceWoVersion`<sup>Optional</sup> <a name="IdentityTokenAudienceWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenAudienceWoVersion"></a>

```csharp
public double IdentityTokenAudienceWoVersion { get; set; }
```

- *Type:* double

A version counter for the write-only identity_token_audience_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_audience_wo_version SecretsSyncAzureDestination#identity_token_audience_wo_version}

---

##### `IdentityTokenKeyWo`<sup>Optional</sup> <a name="IdentityTokenKeyWo" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWo"></a>

```csharp
public string IdentityTokenKeyWo { get; set; }
```

- *Type:* string

The key to use for signing identity tokens.

This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_key_wo SecretsSyncAzureDestination#identity_token_key_wo}

---

##### `IdentityTokenKeyWoVersion`<sup>Optional</sup> <a name="IdentityTokenKeyWoVersion" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenKeyWoVersion"></a>

```csharp
public double IdentityTokenKeyWoVersion { get; set; }
```

- *Type:* double

A version counter for the write-only identity_token_key_wo field. Incrementing this value will trigger an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_key_wo_version SecretsSyncAzureDestination#identity_token_key_wo_version}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#identity_token_ttl SecretsSyncAzureDestination#identity_token_ttl}

---

##### `KeyVaultUri`<sup>Optional</sup> <a name="KeyVaultUri" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri"></a>

```csharp
public string KeyVaultUri { get; set; }
```

- *Type:* string

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `SecretNameTemplate`<sup>Optional</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; set; }
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---



