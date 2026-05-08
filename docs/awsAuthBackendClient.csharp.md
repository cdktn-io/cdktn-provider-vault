# `awsAuthBackendClient` Submodule <a name="`awsAuthBackendClient` Submodule" id="@cdktn/provider-vault.awsAuthBackendClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendClient <a name="AwsAuthBackendClient" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AwsAuthBackendClient(Construct Scope, string Id, AwsAuthBackendClientConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig">AwsAuthBackendClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAllowedStsHeaderValues">ResetAllowedStsHeaderValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint">ResetEc2Endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint">ResetIamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue">ResetIamServerIdHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience">ResetIdentityTokenAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl">ResetIdentityTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKeyWo">ResetSecretKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKeyWoVersion">ResetSecretKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint">ResetStsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion">ResetStsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient">ResetUseStsRegionFromClient</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAllowedStsHeaderValues` <a name="ResetAllowedStsHeaderValues" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAllowedStsHeaderValues"></a>

```csharp
private void ResetAllowedStsHeaderValues()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetEc2Endpoint` <a name="ResetEc2Endpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint"></a>

```csharp
private void ResetEc2Endpoint()
```

##### `ResetIamEndpoint` <a name="ResetIamEndpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint"></a>

```csharp
private void ResetIamEndpoint()
```

##### `ResetIamServerIdHeaderValue` <a name="ResetIamServerIdHeaderValue" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue"></a>

```csharp
private void ResetIamServerIdHeaderValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenAudience` <a name="ResetIdentityTokenAudience" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience"></a>

```csharp
private void ResetIdentityTokenAudience()
```

##### `ResetIdentityTokenTtl` <a name="ResetIdentityTokenTtl" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl"></a>

```csharp
private void ResetIdentityTokenTtl()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetSecretKeyWo` <a name="ResetSecretKeyWo" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKeyWo"></a>

```csharp
private void ResetSecretKeyWo()
```

##### `ResetSecretKeyWoVersion` <a name="ResetSecretKeyWoVersion" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKeyWoVersion"></a>

```csharp
private void ResetSecretKeyWoVersion()
```

##### `ResetStsEndpoint` <a name="ResetStsEndpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint"></a>

```csharp
private void ResetStsEndpoint()
```

##### `ResetStsRegion` <a name="ResetStsRegion" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion"></a>

```csharp
private void ResetStsRegion()
```

##### `ResetUseStsRegionFromClient` <a name="ResetUseStsRegionFromClient" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient"></a>

```csharp
private void ResetUseStsRegionFromClient()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsAuthBackendClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsAuthBackendClient resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValuesInput">AllowedStsHeaderValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput">Ec2EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput">IamEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput">IamServerIdHeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput">IdentityTokenAudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput">IdentityTokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWoInput">SecretKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWoVersionInput">SecretKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput">StsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput">StsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput">UseStsRegionFromClientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValues">AllowedStsHeaderValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint">IamEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWo">SecretKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWoVersion">SecretKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion">StsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient">UseStsRegionFromClient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AllowedStsHeaderValuesInput`<sup>Optional</sup> <a name="AllowedStsHeaderValuesInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValuesInput"></a>

```csharp
public string[] AllowedStsHeaderValuesInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ec2EndpointInput`<sup>Optional</sup> <a name="Ec2EndpointInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput"></a>

```csharp
public string Ec2EndpointInput { get; }
```

- *Type:* string

---

##### `IamEndpointInput`<sup>Optional</sup> <a name="IamEndpointInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput"></a>

```csharp
public string IamEndpointInput { get; }
```

- *Type:* string

---

##### `IamServerIdHeaderValueInput`<sup>Optional</sup> <a name="IamServerIdHeaderValueInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput"></a>

```csharp
public string IamServerIdHeaderValueInput { get; }
```

- *Type:* string

---

##### `IdentityTokenAudienceInput`<sup>Optional</sup> <a name="IdentityTokenAudienceInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput"></a>

```csharp
public string IdentityTokenAudienceInput { get; }
```

- *Type:* string

---

##### `IdentityTokenTtlInput`<sup>Optional</sup> <a name="IdentityTokenTtlInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput"></a>

```csharp
public double IdentityTokenTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `SecretKeyWoInput`<sup>Optional</sup> <a name="SecretKeyWoInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWoInput"></a>

```csharp
public string SecretKeyWoInput { get; }
```

- *Type:* string

---

##### `SecretKeyWoVersionInput`<sup>Optional</sup> <a name="SecretKeyWoVersionInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWoVersionInput"></a>

```csharp
public double SecretKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `StsEndpointInput`<sup>Optional</sup> <a name="StsEndpointInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput"></a>

```csharp
public string StsEndpointInput { get; }
```

- *Type:* string

---

##### `StsRegionInput`<sup>Optional</sup> <a name="StsRegionInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput"></a>

```csharp
public string StsRegionInput { get; }
```

- *Type:* string

---

##### `UseStsRegionFromClientInput`<sup>Optional</sup> <a name="UseStsRegionFromClientInput" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput"></a>

```csharp
public bool|IResolvable UseStsRegionFromClientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AllowedStsHeaderValues`<sup>Required</sup> <a name="AllowedStsHeaderValues" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.allowedStsHeaderValues"></a>

```csharp
public string[] AllowedStsHeaderValues { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ec2Endpoint`<sup>Required</sup> <a name="Ec2Endpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint"></a>

```csharp
public string Ec2Endpoint { get; }
```

- *Type:* string

---

##### `IamEndpoint`<sup>Required</sup> <a name="IamEndpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint"></a>

```csharp
public string IamEndpoint { get; }
```

- *Type:* string

---

##### `IamServerIdHeaderValue`<sup>Required</sup> <a name="IamServerIdHeaderValue" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue"></a>

```csharp
public string IamServerIdHeaderValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenAudience`<sup>Required</sup> <a name="IdentityTokenAudience" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; }
```

- *Type:* string

---

##### `IdentityTokenTtl`<sup>Required</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `SecretKeyWo`<sup>Required</sup> <a name="SecretKeyWo" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWo"></a>

```csharp
public string SecretKeyWo { get; }
```

- *Type:* string

---

##### `SecretKeyWoVersion`<sup>Required</sup> <a name="SecretKeyWoVersion" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyWoVersion"></a>

```csharp
public double SecretKeyWoVersion { get; }
```

- *Type:* double

---

##### `StsEndpoint`<sup>Required</sup> <a name="StsEndpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; }
```

- *Type:* string

---

##### `StsRegion`<sup>Required</sup> <a name="StsRegion" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion"></a>

```csharp
public string StsRegion { get; }
```

- *Type:* string

---

##### `UseStsRegionFromClient`<sup>Required</sup> <a name="UseStsRegionFromClient" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient"></a>

```csharp
public bool|IResolvable UseStsRegionFromClient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendClientConfig <a name="AwsAuthBackendClientConfig" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AwsAuthBackendClientConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessKey = null,
    string[] AllowedStsHeaderValues = null,
    string Backend = null,
    bool|IResolvable DisableAutomatedRotation = null,
    string Ec2Endpoint = null,
    string IamEndpoint = null,
    string IamServerIdHeaderValue = null,
    string Id = null,
    string IdentityTokenAudience = null,
    double IdentityTokenTtl = null,
    double MaxRetries = null,
    string Namespace = null,
    string RoleArn = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    string SecretKey = null,
    string SecretKeyWo = null,
    double SecretKeyWoVersion = null,
    string StsEndpoint = null,
    string StsRegion = null,
    bool|IResolvable UseStsRegionFromClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.allowedStsHeaderValues">AllowedStsHeaderValues</a></code> | <code>string[]</code> | List of additional headers that are allowed to be in STS request headers. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint">Ec2Endpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint">IamEndpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue">IamServerIdHeaderValue</a></code> | <code>string</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience">IdentityTokenAudience</a></code> | <code>string</code> | The audience claim value. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl">IdentityTokenTtl</a></code> | <code>double</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Number of max retries the client should use for recoverable errors. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKeyWo">SecretKeyWo</a></code> | <code>string</code> | Write-only AWS Secret key with permissions to query AWS APIs. This field is recommended over secret_key for enhanced security. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKeyWoVersion">SecretKeyWoVersion</a></code> | <code>double</code> | Version counter for write-only secret_key field. Increment this value to force update of the secret. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint">StsEndpoint</a></code> | <code>string</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion">StsRegion</a></code> | <code>string</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient">UseStsRegionFromClient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `AllowedStsHeaderValues`<sup>Optional</sup> <a name="AllowedStsHeaderValues" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.allowedStsHeaderValues"></a>

```csharp
public string[] AllowedStsHeaderValues { get; set; }
```

- *Type:* string[]

List of additional headers that are allowed to be in STS request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#allowed_sts_header_values AwsAuthBackendClient#allowed_sts_header_values}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#disable_automated_rotation AwsAuthBackendClient#disable_automated_rotation}

---

##### `Ec2Endpoint`<sup>Optional</sup> <a name="Ec2Endpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint"></a>

```csharp
public string Ec2Endpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `IamEndpoint`<sup>Optional</sup> <a name="IamEndpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint"></a>

```csharp
public string IamEndpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `IamServerIdHeaderValue`<sup>Optional</sup> <a name="IamServerIdHeaderValue" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue"></a>

```csharp
public string IamServerIdHeaderValue { get; set; }
```

- *Type:* string

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenAudience`<sup>Optional</sup> <a name="IdentityTokenAudience" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience"></a>

```csharp
public string IdentityTokenAudience { get; set; }
```

- *Type:* string

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}

---

##### `IdentityTokenTtl`<sup>Optional</sup> <a name="IdentityTokenTtl" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl"></a>

```csharp
public double IdentityTokenTtl { get; set; }
```

- *Type:* double

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Number of max retries the client should use for recoverable errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#rotation_period AwsAuthBackendClient#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#rotation_schedule AwsAuthBackendClient#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#rotation_window AwsAuthBackendClient#rotation_window}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `SecretKeyWo`<sup>Optional</sup> <a name="SecretKeyWo" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKeyWo"></a>

```csharp
public string SecretKeyWo { get; set; }
```

- *Type:* string

Write-only AWS Secret key with permissions to query AWS APIs. This field is recommended over secret_key for enhanced security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#secret_key_wo AwsAuthBackendClient#secret_key_wo}

---

##### `SecretKeyWoVersion`<sup>Optional</sup> <a name="SecretKeyWoVersion" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKeyWoVersion"></a>

```csharp
public double SecretKeyWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only secret_key field. Increment this value to force update of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#secret_key_wo_version AwsAuthBackendClient#secret_key_wo_version}

---

##### `StsEndpoint`<sup>Optional</sup> <a name="StsEndpoint" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint"></a>

```csharp
public string StsEndpoint { get; set; }
```

- *Type:* string

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `StsRegion`<sup>Optional</sup> <a name="StsRegion" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion"></a>

```csharp
public string StsRegion { get; set; }
```

- *Type:* string

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `UseStsRegionFromClient`<sup>Optional</sup> <a name="UseStsRegionFromClient" id="@cdktn/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient"></a>

```csharp
public bool|IResolvable UseStsRegionFromClient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---



