# `secretsSyncGhDestination` Submodule <a name="`secretsSyncGhDestination` Submodule" id="@cdktn/provider-vault.secretsSyncGhDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGhDestination <a name="SecretsSyncGhDestination" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination vault_secrets_sync_gh_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncGhDestination(Construct Scope, string Id, SecretsSyncGhDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig">SecretsSyncGhDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig">SecretsSyncGhDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAllowedIpv4Addresses">ResetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAllowedIpv6Addresses">ResetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAllowedPorts">ResetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAppName">ResetAppName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetDisableStrictNetworking">ResetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetEnvironmentName">ResetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryOwner">ResetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetSecretNameTemplate">ResetSecretNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetSecretsLocation">ResetSecretsLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetAllowedIpv4Addresses` <a name="ResetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAllowedIpv4Addresses"></a>

```csharp
private void ResetAllowedIpv4Addresses()
```

##### `ResetAllowedIpv6Addresses` <a name="ResetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAllowedIpv6Addresses"></a>

```csharp
private void ResetAllowedIpv6Addresses()
```

##### `ResetAllowedPorts` <a name="ResetAllowedPorts" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAllowedPorts"></a>

```csharp
private void ResetAllowedPorts()
```

##### `ResetAppName` <a name="ResetAppName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAppName"></a>

```csharp
private void ResetAppName()
```

##### `ResetDisableStrictNetworking` <a name="ResetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetDisableStrictNetworking"></a>

```csharp
private void ResetDisableStrictNetworking()
```

##### `ResetEnvironmentName` <a name="ResetEnvironmentName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetEnvironmentName"></a>

```csharp
private void ResetEnvironmentName()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetGranularity"></a>

```csharp
private void ResetGranularity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetInstallationId"></a>

```csharp
private void ResetInstallationId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryName"></a>

```csharp
private void ResetRepositoryName()
```

##### `ResetRepositoryOwner` <a name="ResetRepositoryOwner" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryOwner"></a>

```csharp
private void ResetRepositoryOwner()
```

##### `ResetSecretNameTemplate` <a name="ResetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetSecretNameTemplate"></a>

```csharp
private void ResetSecretNameTemplate()
```

##### `ResetSecretsLocation` <a name="ResetSecretsLocation" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetSecretsLocation"></a>

```csharp
private void ResetSecretsLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncGhDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGhDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGhDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGhDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SecretsSyncGhDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsSyncGhDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncGhDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncGhDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncGhDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv4AddressesInput">AllowedIpv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv6AddressesInput">AllowedIpv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedPortsInput">AllowedPortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.disableStrictNetworkingInput">DisableStrictNetworkingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationIdInput">InstallationIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwnerInput">RepositoryOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplateInput">SecretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretsLocationInput">SecretsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.environmentName">EnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationId">InstallationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwner">RepositoryOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretsLocation">SecretsLocation</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `AllowedIpv4AddressesInput`<sup>Optional</sup> <a name="AllowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv4AddressesInput"></a>

```csharp
public string[] AllowedIpv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6AddressesInput`<sup>Optional</sup> <a name="AllowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv6AddressesInput"></a>

```csharp
public string[] AllowedIpv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedPortsInput`<sup>Optional</sup> <a name="AllowedPortsInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedPortsInput"></a>

```csharp
public double[] AllowedPortsInput { get; }
```

- *Type:* double[]

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `DisableStrictNetworkingInput`<sup>Optional</sup> <a name="DisableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.disableStrictNetworkingInput"></a>

```csharp
public bool|IResolvable DisableStrictNetworkingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.environmentNameInput"></a>

```csharp
public string EnvironmentNameInput { get; }
```

- *Type:* string

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationIdInput"></a>

```csharp
public double InstallationIdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryNameInput"></a>

```csharp
public string RepositoryNameInput { get; }
```

- *Type:* string

---

##### `RepositoryOwnerInput`<sup>Optional</sup> <a name="RepositoryOwnerInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwnerInput"></a>

```csharp
public string RepositoryOwnerInput { get; }
```

- *Type:* string

---

##### `SecretNameTemplateInput`<sup>Optional</sup> <a name="SecretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplateInput"></a>

```csharp
public string SecretNameTemplateInput { get; }
```

- *Type:* string

---

##### `SecretsLocationInput`<sup>Optional</sup> <a name="SecretsLocationInput" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretsLocationInput"></a>

```csharp
public string SecretsLocationInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `AllowedIpv4Addresses`<sup>Required</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedIpv6Addresses`<sup>Required</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; }
```

- *Type:* string[]

---

##### `AllowedPorts`<sup>Required</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; }
```

- *Type:* double[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `DisableStrictNetworking`<sup>Required</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.environmentName"></a>

```csharp
public string EnvironmentName { get; }
```

- *Type:* string

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationId"></a>

```csharp
public double InstallationId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `RepositoryOwner`<sup>Required</sup> <a name="RepositoryOwner" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwner"></a>

```csharp
public string RepositoryOwner { get; }
```

- *Type:* string

---

##### `SecretNameTemplate`<sup>Required</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; }
```

- *Type:* string

---

##### `SecretsLocation`<sup>Required</sup> <a name="SecretsLocation" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretsLocation"></a>

```csharp
public string SecretsLocation { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGhDestinationConfig <a name="SecretsSyncGhDestinationConfig" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SecretsSyncGhDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AccessToken = null,
    string[] AllowedIpv4Addresses = null,
    string[] AllowedIpv6Addresses = null,
    double[] AllowedPorts = null,
    string AppName = null,
    bool|IResolvable DisableStrictNetworking = null,
    string EnvironmentName = null,
    string Granularity = null,
    string Id = null,
    double InstallationId = null,
    string Namespace = null,
    string RepositoryName = null,
    string RepositoryOwner = null,
    string SecretNameTemplate = null,
    string SecretsLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.name">Name</a></code> | <code>string</code> | Unique name of the github destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.accessToken">AccessToken</a></code> | <code>string</code> | Fine-grained or personal access token. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.allowedIpv4Addresses">AllowedIpv4Addresses</a></code> | <code>string[]</code> | List of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.allowedIpv6Addresses">AllowedIpv6Addresses</a></code> | <code>string[]</code> | List of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.allowedPorts">AllowedPorts</a></code> | <code>double[]</code> | List of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.appName">AppName</a></code> | <code>string</code> | The user-defined name of the GitHub App configuration. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.disableStrictNetworking">DisableStrictNetworking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables strict networking enforcement for this destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.environmentName">EnvironmentName</a></code> | <code>string</code> | GitHub environment name where secrets will be synced. Required when secrets_location is set to 'environment'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.granularity">Granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#id SecretsSyncGhDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.installationId">InstallationId</a></code> | <code>double</code> | The ID of the installation generated by GitHub when the app referenced by the app_name was installed in the user's GitHub account. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryName">RepositoryName</a></code> | <code>string</code> | Name of the repository. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryOwner">RepositoryOwner</a></code> | <code>string</code> | GitHub organization or username that owns the repository. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.secretNameTemplate">SecretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.secretsLocation">SecretsLocation</a></code> | <code>string</code> | Determines where secrets will be stored in GitHub. Valid values are 'repository' or 'environment'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name of the github destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#name SecretsSyncGhDestination#name}

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Fine-grained or personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#access_token SecretsSyncGhDestination#access_token}

---

##### `AllowedIpv4Addresses`<sup>Optional</sup> <a name="AllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.allowedIpv4Addresses"></a>

```csharp
public string[] AllowedIpv4Addresses { get; set; }
```

- *Type:* string[]

List of allowed IPv4 addresses in CIDR notation (e.g., 192.168.1.1/32) for outbound connections from Vault to the destination. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#allowed_ipv4_addresses SecretsSyncGhDestination#allowed_ipv4_addresses}

---

##### `AllowedIpv6Addresses`<sup>Optional</sup> <a name="AllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.allowedIpv6Addresses"></a>

```csharp
public string[] AllowedIpv6Addresses { get; set; }
```

- *Type:* string[]

List of allowed IPv6 addresses in CIDR notation (e.g., 2001:db8::1/128) for outbound connections from Vault to the destination. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#allowed_ipv6_addresses SecretsSyncGhDestination#allowed_ipv6_addresses}

---

##### `AllowedPorts`<sup>Optional</sup> <a name="AllowedPorts" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.allowedPorts"></a>

```csharp
public double[] AllowedPorts { get; set; }
```

- *Type:* double[]

List of allowed ports for outbound connections from Vault to the destination. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#allowed_ports SecretsSyncGhDestination#allowed_ports}

---

##### `AppName`<sup>Optional</sup> <a name="AppName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

The user-defined name of the GitHub App configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#app_name SecretsSyncGhDestination#app_name}

---

##### `DisableStrictNetworking`<sup>Optional</sup> <a name="DisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.disableStrictNetworking"></a>

```csharp
public bool|IResolvable DisableStrictNetworking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables strict networking enforcement for this destination.

When disabled, Vault will not enforce allowed IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#disable_strict_networking SecretsSyncGhDestination#disable_strict_networking}

---

##### `EnvironmentName`<sup>Optional</sup> <a name="EnvironmentName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.environmentName"></a>

```csharp
public string EnvironmentName { get; set; }
```

- *Type:* string

GitHub environment name where secrets will be synced. Required when secrets_location is set to 'environment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#environment_name SecretsSyncGhDestination#environment_name}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#granularity SecretsSyncGhDestination#granularity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#id SecretsSyncGhDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.installationId"></a>

```csharp
public double InstallationId { get; set; }
```

- *Type:* double

The ID of the installation generated by GitHub when the app referenced by the app_name was installed in the user's GitHub account.

Necessary if the app_name field is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#installation_id SecretsSyncGhDestination#installation_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#namespace SecretsSyncGhDestination#namespace}

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryName"></a>

```csharp
public string RepositoryName { get; set; }
```

- *Type:* string

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#repository_name SecretsSyncGhDestination#repository_name}

---

##### `RepositoryOwner`<sup>Optional</sup> <a name="RepositoryOwner" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryOwner"></a>

```csharp
public string RepositoryOwner { get; set; }
```

- *Type:* string

GitHub organization or username that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#repository_owner SecretsSyncGhDestination#repository_owner}

---

##### `SecretNameTemplate`<sup>Optional</sup> <a name="SecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.secretNameTemplate"></a>

```csharp
public string SecretNameTemplate { get; set; }
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#secret_name_template SecretsSyncGhDestination#secret_name_template}

---

##### `SecretsLocation`<sup>Optional</sup> <a name="SecretsLocation" id="@cdktn/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.secretsLocation"></a>

```csharp
public string SecretsLocation { get; set; }
```

- *Type:* string

Determines where secrets will be stored in GitHub. Valid values are 'repository' or 'environment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/secrets_sync_gh_destination#secrets_location SecretsSyncGhDestination#secrets_location}

---



